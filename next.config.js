const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    env: {
        "BASE_URL": 'http://localhost:3000',
        "MONGODB_URL": "mongodb+srv://Akmal:565462123@cluster0.y4deq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET": "-Q*2%E]B2=4u9xtBm{x]6QYL._W`<{TM$tzUUNAp;d2t;sT_VMFJWk]R:`~3L[=<m4~k}!(kXM/[*4/HL#GumpU`?5cxjt,KZL}RL:MeQ'x'XB)@,seajHUfyBr\\nkq?%&]CR}fM5QrYU%>qT<zm$~L/nLj&c{yK9{\")$Tz5Fx)>?y<;VZ=qV3$sASQkD=H@T7mrev^x<exMPCKwT[N<yQv/fc-_G]>Ys3^V&r8n36%^\"EJ\\;&GEC`7_K~^pFWQC",
        "REFRESH_TOKEN_SECRET": "L_VV?Zp?{K8,PLr^@;T}TvDy@45Fr@/NXH5.PPqyXwRBr*=,X~[CbMEu^abYddCar>Vc>32DzRZTzdS*YMqBHET&8jB]DmzV.\"p<,jC]Z>\"4_AkUh:dXG;U']QX;N^VU~QdQyhQs*_A*Y[x[nd;NzB@:>j%ZY=k**+s^N`VrbQd\"rHNs$N-j3^;7Sk]/`869;&_V,z`(/}NkT57^p\\",
        "CLOUD_UPDATE_PRESET": "buysold",
        "CLOUD_NAME": "bulutvoy",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/bulutvoy/image/upload",
        // "SMS_API":"62659c5asfu4zvd7898g1kj013e77it8v"
        "EVERIFY_KEY":"uaV9h7Czd5eyAolkitaytuKhBVBbfSEg"
    }
}