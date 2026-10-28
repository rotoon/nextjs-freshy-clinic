import type { FireCMSContext } from '@firecms/core'
import { getAuth } from 'firebase/auth'

export async function refreshPublicContent({ context }: { context: FireCMSContext }) {
  try {
    const token = await getAuth().currentUser?.getIdToken()
    if (!token) throw new Error('Authentication required')
    const response = await fetch('/api/revalidate', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      keepalive: true,
      signal: AbortSignal.timeout(10000),
    })
    if (!response.ok) throw new Error('Cache refresh failed')
  } catch {
    context.snackbarController.open({
      type: 'warning',
      autoHideDuration: 60000,
      message: (
        <span>
          เปลี่ยนข้อมูลแล้ว แต่ยังล้าง cache หน้าเว็บไม่สำเร็จ{' '}
          <button type='button' onClick={() => {
            context.snackbarController.close()
            void refreshPublicContent({ context })
          }}>
            ลองล้าง cache อีกครั้ง
          </button>
        </span>
      ),
    })
  }
}
