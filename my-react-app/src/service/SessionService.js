// class SessionService {

//     setRole(role) {
//       try {
//         sessionStorage.setItem("role", role);
//       } catch (error) {
//         console.error('Error setting role:', error);
//       }
//     }
  
//     getRole() {
//       try {
//         return sessionStorage.getItem("role");
//       } catch (error) {
//         console.error('Error getting role:', error);
//         return null;
//       }
//     }
  
//     storeUser(user) {
//       try {
//         sessionStorage.setItem("user", JSON.stringify(user));
//       } catch (error) {
//         console.error('Error storing user:', error);
//       }
//     }
  
//     getCurrentUser() {
//       try {
//         return JSON.parse(sessionStorage.getItem('user'));
//       } catch (error) {
//         console.error('Error getting current user:', error);
//         return null;
//       }
//     }
  
//     storeHomeMaker(homeMaker) {
//       try {
//         sessionStorage.setItem("homeMaker", JSON.stringify(homeMaker));
//       } catch (error) {
//         console.error('Error storing home maker:', error);
//       }
//     }
  
//     getCurrentHomeMaker() {
//       try {
//         return JSON.parse(sessionStorage.getItem("homeMaker"));
//       } catch (error) {
//         console.error('Error getting current home maker:', error);
//         return null;
//       }
//     }
  
//     removeHomeMaker() {
//       try {
//         sessionStorage.removeItem("homeMaker");
//       } catch (error) {
//         console.error('Error removing home maker:', error);
//       }
//     }
  
//     setPrice(price) {
//       try {
//         sessionStorage.setItem("price", price.toString());
//       } catch (error) {
//         console.error('Error setting price:', error);
//       }
//     }
  
//     getPrice() {
//       try {
//         return sessionStorage.getItem("price");
//       } catch (error) {
//         console.error('Error getting price:', error);
//         return null;
//       }
//     }
  
//     logout() {
//       try {
//         sessionStorage.removeItem("user");
//         sessionStorage.removeItem("homeMaker");
//         sessionStorage.removeItem("role");
//         sessionStorage.removeItem("price");
//       } catch (error) {
//         console.error('Error during logout:', error);
//       }
//     }
//   }
  
//   export default new SessionService();
  
class SessionService {

  setRole(role) {
    sessionStorage.setItem("role", role)
  }

  getRole() {
    return sessionStorage.getItem("role")
  }

  storeUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));// response.data
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  storeHomeMaker(homeMaker) {
    sessionStorage.setItem("homeMaker", JSON.stringify(homeMaker))
  }

  getCurrentHomeMaker() {
    return JSON.parse(sessionStorage.getItem("homeMaker"));
  }

  removeHomeMaker() {
    sessionStorage.removeItem("homeMaker")
  }

  setPrice(price){
    sessionStorage.setItem("price",price)
  }

  getPrice(){
    return sessionStorage.getItem("price")
  }

  logout() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("homeMaker")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("price")
  }
}

export default new SessionService();