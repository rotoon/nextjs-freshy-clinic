const admin = require('firebase-admin')
const functions = require('firebase-functions')
const { setGlobalOptions } = require('firebase-functions/v2')
setGlobalOptions({ maxInstances: 10 })

const cors = require('cors')
admin.initializeApp()

const db = admin.firestore()

const applyMiddleware = (handler) => (req, res) => {
  return cors()(req, res, () => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')
    return handler(req, res)
  })
}

exports.slide = functions.region('asia-southeast1').https.onRequest(
  applyMiddleware(async (request, response) => {
    try {
      if (request.method === 'GET') {
        const slideRef = db.collection('slides').orderBy('order', 'asc')
        const [slideCount, slidesSnap] = await Promise.all([
          slideRef.count().get(),
          slideRef.get(),
        ])

        const slides =
          (slidesSnap.size > 0 &&
            slidesSnap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
              createdAt: doc.data()?.updatedAt.toDate() || '',
              updatedAt: doc.data()?.updatedAt.toDate() || '',
            }))) ||
          []

        response.status(200).send({
          total: slideCount.data().count,
          list: slides,
        })
      } else {
        response.status(405).send('Method not allowed')
      }
    } catch (error) {
      throw new Error(error.message)
    }
  })
)

exports.programs = functions.region('asia-southeast1').https.onRequest(
  applyMiddleware(async (request, response) => {
    try {
      if (request.method === 'GET') {
        let programRef = db.collection('Programs')
        if (request.params['0'] === 'recommend') {
          programRef = programRef.where('isRecommend', '==', true)
        }

        programRef = programRef.orderBy('order', 'asc')
        const [programCount, programsSnap] = await Promise.all([
          programRef.count().get(),
          programRef.get(),
        ])

        const programs =
          (programsSnap.size > 0 &&
            programsSnap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
              createdAt: doc.data()?.updatedAt.toDate() || '',
              updatedAt: doc.data()?.updatedAt.toDate() || '',
            }))) ||
          []

        response.status(200).send({
          total: programCount.data().count,
          list:
            request.params['0'] === 'recommend'
              ? programs.filter((p) => p.isRecommend)
              : programs,
        })
      } else {
        response.status(405).send('Method not allowed')
      }
    } catch (error) {
      throw new Error(error.message)
    }
  })
)
