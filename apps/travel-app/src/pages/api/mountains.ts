import { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {}

export default function mountainHandler(req:NextApiRequest,res:NextApiResponse){
res.status(200).send({"mountDestinations":[

    {
        _id:"a",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775562/travel/mountain/mountDestinations/swiss_czxwts.png",
        name:"Swiss Apls",
        rating:"4.7",
        favourite:true
    },
    {
        _id:"b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775554/travel/mountain/mountDestinations/hallstatt_m8biij.png",
        name:"Hallstatt",
        rating:"4.9",
        favourite:true
    },
    {
        _id:"c",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775545/travel/mountain/mountDestinations/faroe_bgvktd.png",
        name:"Faroe island",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775558/travel/mountain/mountDestinations/innsbruck_zycknn.png",
        name:"Innsbruck",
        rating:"4.8",
        favourite:false
    },
],
"mountRecents":[

    
    {
        _id:"b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775554/travel/mountain/mountDestinations/hallstatt_m8biij.png",
        name:"Hallstatt",
        rating:"4.9",
        favourite:true
    },
   
    {
        _id:"d",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775558/travel/mountain/mountDestinations/innsbruck_zycknn.png",
        name:"Innsbruck",
        rating:"4.8",
        favourite:false
    },
],
"mountInclusive":[

    
    {
        _id:"a",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775662/travel/mountain/mountInclusive/valdi_uryxk1.png",
        name:"Val di Funes",
        rating:"4.7",
        favourite:false
    },
   
    {
        _id:"b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775656/travel/mountain/mountInclusive/ushuaia_lwzpix.png",
        name:"Ushuaia",
        rating:"4.9",
        favourite:false
    },
    {
        _id:"c",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775648/travel/mountain/mountInclusive/berchtes_ivyk87.png",
        name:"Berchtestgaden",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775652/travel/mountain/mountInclusive/fussen_ljneut.png",
        name:"Fussen",
        rating:"4.8",
        favourite:false
    }
],
"mountHoneymoon":[

    
    {
        _id:"a",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775584/travel/mountain/mountHoneymoon/mauritius_xduszq.png",
        name:"Mauritius",
        rating:"4.7",
        favourite:false
    },
   
    {
        _id:"b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775573/travel/mountain/mountHoneymoon/havelock_zcj0rx.png",
        name:"Havelock",
        rating:"4.9",
        favourite:false
    },
    {
        _id:"c",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775588/travel/mountain/mountHoneymoon/whitsunday_oq12j8.png",
        name:"Whitsunday Islands",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775580/travel/mountain/mountHoneymoon/maldives_zxe5tb.png",
        name:"Maldives",
        rating:"4.8",
        favourite:false
    }
]
})
}