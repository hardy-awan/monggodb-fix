const adminController = require('../controller/adminController')
const middleware = require('../middleware/middleware')

module.exports = app => {
    app.get('/',adminController.index)
    app.get('/data-murid', adminController.dataMurid)
    app.get('/login', adminController.login)
    app.post('/proses', middleware.validate_user,adminController.proses)
    app.get('/add-murid', adminController.addMurid)
    app.get('/edit-murid/:id', adminController.editMurid)
    app.get('/delete-murid/:id', adminController.deleteMurid)
    app.post('/save-murid', adminController.saveMurid)
    app.post('/update-murid/:id', adminController.updateMurid)
}