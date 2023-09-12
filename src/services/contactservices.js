import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5001/contact";

class ConactService {

    // getContact(){
    //     return axios.get(USER_API_BASE_URL+`/:${userId}/whishList`);
    // }

    createContact(contactData){
        console.log(contactData,"DATA CONTACT");
        return axios.post(USER_API_BASE_URL,contactData);
    }

    // getWishListById(categoryId){
    //     return axios.get(USER_API_BASE_URL + '/' + categoryId);
    // }

    // updateCategory(category, categoryId){
    //     console.log(categoryId,'productuiddd');
    //     return axios.put(USER_API_BASE_URL + '/' + categoryId, category);
    // }
   

    // deleteWishList(wishListId){
    //     return axios.delete(USER_API_BASE_URL + '/' + wishListId);
    // }
}

export default new ConactService()