import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {}

 
export default function homeHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).send({"destinations":[{
    _id: "a", 
    name: "Bali, Indonesia",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774585/travel/destinations/Bali_jiz50v.png',

},
{
    _id:"b",
    name:"Kerry, Ireland",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774586/travel/destinations/Kerry_vhbryi.png'
},
{
    _id:"c",
    name:"Sydney, Australia",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774590/travel/destinations/Sydney_guaqwl.png'
},
{
    _id:"d",
    name:"Paris, France",
    image:'https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774588/travel/destinations/Paris_psridg.png'
}],
"properties":[
  {
      _id: "a",
      name: "Hotels",
      image:  "https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774780/travel/properties/hotels_ubztnc.png",

  },
  {
      _id:"b",
      name:"Villas",
      image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774786/travel/properties/villas_e06ouz.png"
  },
  {
      _id:"c",
      name:"Resorts",
      image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774783/travel/properties/resorts_ausqcj.png"
  },
  {
      _id:"d",
      name:"Apartments",
      image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774778/travel/properties/apartments_w4x0ut.png"
  }
],
"offers":[
    {
        _id: "a",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774960/travel/offers/flight_sp8tzs.png",
        name: "Domestic Flights",
        p1:"Huge savings on flight with trxvl.",
        p2:"Book domestic flights starting @ just $1459",

    },
    {
        _id: "b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774963/travel/offers/hotel_w5aukh.png",
        name: "International Hotels",
        p1:"Enjoy upto 20% off on International Hotels",
        p2:"Make the most out of this deal on your first booking with trxvl.",

    },
    {
        _id: "c",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774967/travel/offers/mountain_gwv1mk.png",
        name: "Bank Offer",
        p1:"Get upto 30% instant discount",
        p2:"Get discount on flights, hotels and holiday packages with HDFC bank credit card.",

    },
  ],
  "communities":[
    {
        _id:"a",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775021/travel/communities/Taj_o1znke.png",
        name:"India",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"b",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775002/travel/communities/Fire_fkvfq6.png",
        name:"Travel talk",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"c",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739774999/travel/communities/BeachGirl_iqrocu.png",
        name:"Beach",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"d",
        image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739775006/travel/communities/MountainGirl_nfl4jn.png",
        name:"Mountains",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    
  ],
  "travelExpert":[{_id:"a",
    image:"https://res.cloudinary.com/dzoo0df0n/image/upload/v1739778176/travel/TravelExpert_fbtpxl.png"
}]
    

  
})
}