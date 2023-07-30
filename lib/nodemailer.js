import nodemailer from "nodemailer"

const email = process.env. EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;

// export const transporter = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user: email,
//         pass: pass,
//     }
// })
export const transporter = nodemailer.createTransport({
    host:"smtp.office365.com",
    port:587,
    secure: false,
    // service:"gmail",
    auth:{
        user: "info@smartitbs.com",
        pass: "Swaziland2010",
    },
    tls:{
        rejectUnauthorized: false
    }
})

// export const mailOptions ={
//     from: email,
//     to: email,

// }
export const mailOptions ={
    from: 'SMART IT BUSINESS <info@smartitbs.com>',
    to: "info@smartitbs.com",

}
