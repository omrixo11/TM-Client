import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:5001/users";

class WishListService {

    getWishList(userId){
        return axios.get(USER_API_BASE_URL+`/:${userId}/whishList`);
    }

    addToWishList(userId,productId){
        return axios.patch(USER_API_BASE_URL+`/${userId}/add-wishlist/${productId}`);
    }

    getWishListById(categoryId){
        return axios.get(USER_API_BASE_URL + '/' + categoryId);
    }

    updateCategory(category, categoryId){
        console.log(categoryId,'productuiddd');
        return axios.put(USER_API_BASE_URL + '/' + categoryId, category);
    }
   

    deleteWishList(wishListId){
        return axios.delete(USER_API_BASE_URL + '/' + wishListId);
    }
}

export default new WishListService()