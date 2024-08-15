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