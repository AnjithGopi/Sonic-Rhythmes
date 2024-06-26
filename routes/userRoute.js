


const express=require("express")
const path=require("path")
const user_Route=express()
const session=require("express-session")
const nodemailer=require('nodemailer')


//------------required controllers------



const userController=require("../controllers/userController")
const cartController=require("../controllers/cartController")

//------------------Auth-----------

const userAuth=require('../middleware/userAuth')

//-----------View Engine & Static files--------------

user_Route.set('view engine','ejs')
user_Route.set('views','./view/users')


user_Route.get('/',userController.loadHome)
user_Route.get("/signup",userAuth.isLogout,userController.loadRegister)
user_Route.post('/signup',userAuth.isLogout,userController.verifySignup)
user_Route.get("/login",userAuth.isLogout,userController.loadLogin)
user_Route.post('/login',userController.verifyLogin)
user_Route.get('/getOtp',userAuth.isLogout,userController.getOtp)
user_Route.post("/Otp",userAuth.isLogout,userController.verifyOtp)
user_Route.get("/productDetails",userAuth.isLogin,userAuth.isBlocked,userController.productDetails)


user_Route.post('/searchproduct',userController.loadHome)

user_Route.post("/searchInShop",userController.shop)




//--------forgotPassword---------


user_Route.get('/forgotPassword',userAuth.isLogout,userController.getForgotPassword)
user_Route.post('/forgotPassword',userAuth.isLogout,userController.postForgotPassword)
user_Route.get('/newOtp',userAuth.isLogout,userController.newOtp)
user_Route.post('/newOtp',userAuth.isLogout,userController.verifyNewOtp)
user_Route.post('/newPassword',userAuth.isLogout,userController.verifyPasswords)
user_Route.get('/logout',userController.loadLogout)


// ---------------Shop----

user_Route.get("/shop",userAuth.isLogin,userAuth.isBlocked,userController.shop)

 
//------------------Cart------------

user_Route.get('/cart',userAuth.isLogin,userAuth.isBlocked,cartController.getCart)
user_Route.post('/addtoCart',userAuth.isLogin,userAuth.isBlocked,cartController.addtoCart)
user_Route.post('/removeFromCart',userAuth.isLogin,cartController.deleteIteminCart)
user_Route.post('/updateCartItemQuantity',userAuth.isLogin,userAuth.isBlocked,cartController.updateitemQuantity)
user_Route.get('/search',userAuth.isLogin,userAuth.isBlocked,cartController.searchInCart)
user_Route.get("/checkOut",userAuth.isLogin,userAuth.isBlocked,cartController.checkOut)
user_Route.post('/placeorder',userAuth.isLogin,userAuth.isBlocked,cartController.placeOrder)
user_Route.post('/applyCoupon',userAuth.isLogin,userAuth.isBlocked,cartController.applyCoupon)

//---------wishlist

user_Route.get('/wishList',userAuth.isLogin,userAuth.isBlocked,cartController.getWishlist)
user_Route.post('/addtoWishList',userAuth.isLogin,userAuth.isBlocked,cartController.addtoWishList)
user_Route.post('/removeFromWishlist',userAuth.isLogin,userAuth.isBlocked,cartController.removeFromWishlist)


//..........Dashboard.................

user_Route.get("/userDashboard",userAuth.isLogin,userAuth.isBlocked,userController.userDash)
user_Route.get("/addressForm",userAuth.isLogin,userAuth.isBlocked,userController.addressForm)
user_Route.get("/checkOutAddress",userAuth.isLogin,userAuth.isBlocked,userController.addAddressInCheckout)
user_Route.post("/createAddressInCheckOut",userAuth.isLogin,userAuth.isBlocked,userAuth.isBlocked,userController.createAddress2)
user_Route.post("/createAddress",userAuth.isLogin,userAuth.isBlocked,userAuth.isBlocked,userController.createAddress)
user_Route.get("/cancelOrder",userAuth.isLogin,userAuth.isBlocked,cartController.userOrderCancel)
user_Route.get('/returnOrder',userAuth.isLogin,userAuth.isBlocked,cartController.userOrderReturn)
user_Route.get('/userOrderDetails',userAuth.isLogin,userAuth.isBlocked,cartController.userOrderDetails)
user_Route.post('/edit_userProfile',userAuth.isLogin,userController.editUserProfile)
user_Route.get('/editAddress',userAuth.isLogin,userController.editAddress)
user_Route.post("/updateAddress",userAuth.isLogin,userController.updateAddress)


user_Route.get('/changePassword',userAuth.isLogin,userAuth.isBlocked,userController.editProfile)
user_Route.post('/updatePassword',userAuth.isLogin,userAuth.isBlocked,userController.updatePassword)

// ........wallet........


user_Route.post('/placeorderWallet',userAuth.isLogin,userAuth.isBlocked,cartController.placeOrderWallet)
user_Route.get("/Wallet",userAuth.isLogin,userAuth.isBlocked,cartController.walletDetails)





//.......Rasorpay..........



user_Route.post('/paymentByRazorpay',userAuth.isLogin,userAuth.isBlocked,cartController.onlinePayment)
user_Route.get('/changestatus',cartController.changeStatus)


// .........invoice...........

user_Route.get("/invoicePage",userAuth.isLogin,userAuth.isBlocked,userController.invoiceShow)

// ----------filter products



user_Route.get("/filterProducts",userController.filterProdutcs)

user_Route.get("/sortBrand",userController.sortBrand)

// ------sort in shop------

user_Route.get("/lowtoHigh",userController.lowtohigh)
user_Route.get("/hightoLow",userController.hightoLow)
user_Route.get("/Aa_Zz",userController.atoz)
user_Route.get("/Zz_Aa",userController.ztoa)


// ----contact----

user_Route.get("/contact",userController.contact)
user_Route.post('/sendMessage',userAuth.isLogin,userAuth.isBlocked,userController.sendMessage)






















module.exports=user_Route