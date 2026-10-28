import { FormEvent, useState } from 'react'
import {
  Alert,
  AlertTitle,
  Box,
  Collapse,
  Container,
  CssBaseline,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import CloseIcon from '@mui/icons-material/Close'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export function CustomLoginView() {
  const auth = getAuth()
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<{
    title: string
    message: string
  } | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      if (error) {
        setLoading(false)
        const errorMessage = error.message
        switch (error.code) {
          case 'auth/user-not-found':
            setError({
              title: 'ไม่พบผู้ใช้งาน',
              message: 'กรุณาลองใหม่อีกครั้ง',
            })
            break
          case 'auth/wrong-password':
            setError({
              title: 'รหัสผ่านผิด',
              message: 'กรุณาลองใหม่อีกครั้ง',
            })
            break
          case 'auth/user-disabled':
            setError({
              title: 'ผู้ใช้ถูกระงับการใช้งาน',
              message: 'กรุณาติดต่อผู้ดูแลระบบ',
            })
            break
          default:
            setError({
              title: errorMessage,
              message: 'เกิดข้อผิดพลาด กรุณาติดต่อผู้ดูแลระบบ',
            })
        }
      }
    })
  }

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          sx={{
            p: 1,
            width: 'auto',
            height: 'auto',
            borderRadius: 10,
          }}
          src='/logo.png'
        />
        <Typography
          component='h1'
          variant='h5'
        >
          Sign in
        </Typography>

        <Box
          component='form'
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Collapse in={!!error}>
            <Alert
              severity='error'
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {
                    setError(null)
                  }}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ my: 2 }}
            >
              <AlertTitle>{error?.title}</AlertTitle>
              {error?.message}
            </Alert>
          </Collapse>

          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={(e) => {
              setError(null)
              setEmail(e.target.value)
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(e) => {
              setError(null)
              setPassword(e.target.value)
            }}
          />

          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            loading={isLoading}
            disabled={email === '' || password === ''}
          >
            Sign In
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  )
}
