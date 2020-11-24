const express = require('express');
//const session = require('express-session');
const upload = require('express-fileupload');


const router 	= express.Router();

const app = express();

app.use(upload());

// View engine setup
app.set('view engine', 'ejs')

router.get('/',(req, res)=>{
    res.render('vuser/fileupload');
});

router.post('/', (res,req )=>
{
if (req.files) {
    console.log(req.files)
    var file = req.files.file
    var filename = file.name 
    console.log(fileName)

    file.mv('./uploads/' +filename ,function (err){
        if (err) {
             res.send(err)
        } else{
            res.render('/vuser/customerHome');
        }
    })
}

})

module.exports = router;