import http from "../api/menu";

  class ListDaftarMenu {
    
    DaftarSeafood(): Promise<any> {
      return http.get("filter.php?c=Seafood")
    }
    DaftarChickenBreast(): Promise<any> {
      return http.get("filter.php?i=chicken_breast")
    }

  }

export default new ListDaftarMenu();
