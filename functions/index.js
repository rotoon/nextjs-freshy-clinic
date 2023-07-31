const admin = require('firebase-admin')
const functions = require('firebase-functions')
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

// exports.tour = functions.region('asia-southeast1').https.onRequest(
//   applyMiddleware(async (request, response) => {
//     try {
//       if (request.method === 'GET') {
//         if (request.params['0'] !== '') {
//           const slug = request.params['0']
//           const tourRef = await db
//             .collection('tours')
//             .where('slug', '==', slug)
//             .get()
//           if (tourRef.size === 1) {
//             const tour =
//               (tourRef.size > 0 &&
//                 tourRef.docs.map((doc) => ({
//                   id: doc.id,
//                   ...doc.data(),
//                   albums: doc.data().albums.map((album) => album.image),
//                   createdAt: doc.data()?.updatedAt.toDate() || '',
//                   updatedAt: doc.data()?.updatedAt.toDate() || '',
//                 }))) ||
//               []
//             response.status(200).send(tour[0])
//           } else {
//             response.status(204).send({ message: 'No data found' })
//           }
//         } else {
//           const tourRef = db.collection('tours').orderBy('order', 'asc')
//           const [tourCount, toursSnap] = await Promise.all([
//             tourRef.count().get(),
//             tourRef.get(),
//           ])

//           const tours =
//             (toursSnap.size > 0 &&
//               toursSnap.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data(),
//                 albums: doc.data().albums.map((album) => album.image),
//                 createdAt: doc.data()?.updatedAt.toDate() || '',
//                 updatedAt: doc.data()?.updatedAt.toDate() || '',
//               }))) ||
//             []

//           response.status(200).send({
//             total: tourCount.data().count,
//             list: tours,
//           })
//         }
//       } else {
//         response.status(405).send('Method not allowed')
//       }
//     } catch (error) {
//       throw new Error(error.message)
//     }
//   })
// )
