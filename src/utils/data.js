import {growth, flowing, yourUser, phone, mail} from '../assets/index'
import { FaSquareFacebook } from 'react-icons/fa6'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'

export const data = [
    {
        id: 1,
        title:"Grow Together",
        desc: `Generate meaningful discussions with 
        your audience and build a strong, loyal community. 
        Think of the insightful conversations you miss out on 
        with a feedback form.`,
        imgUrl: growth,
        isReverse: true
    },
    {
        id: 2,
        title:"Flowing Conversations",
        desc: `You wouldn't paginate a conversation 
        in real life, so why do it online? Our threads have 
        just-in-time loading for a more natural flow.`,
        imgUrl: flowing,
        isReverse: false
    },
    {
        id: 3,
        title:"Your Users",
        desc: `It takes no time at all to integrate Huddle 
        with your app's authentication solution. This means, 
        once signed in to your app, your users 
        can start chatting immediately.`,
        imgUrl: yourUser,
        isReverse: true
    }
]

export const footerContact = [{
    text: "Phone: +1-543-123-4567",
    icon: phone
  },
  {
    text: "example@huddle.com",
    icon: mail
  },
]

export const footerSocials = [
    {
        id: "facebook",
        Icon: FaSquareFacebook
    },
    {
        id: "instagram",
        Icon: BsInstagram
    },
    {
        id: "twitter",
        Icon: FaTwitterSquare
    }
]