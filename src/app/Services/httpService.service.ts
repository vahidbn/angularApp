import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export  class HttpService {
    constructor (private httpClient :HttpClient)
    {}

    fetchCategury()
    {
         return this.httpClient.get('https://myonestory.sakkou.org/API/Shop/GetCategories?APIKey=2ff4ac8fef7ca0cbf848d119e0cd25f3&project=PMOS&LanguageId=en');
    }

    fetchBookList(catID)
    {
        console.log(catID);
        if (catID !='AllBooks')
        return this.httpClient.get('http://myonestory.sakkou.org/API/myonestory/GetBookList?APIKey=2ff4ac8fef7ca0cbf848d119e0cd25f3&Project=PMOS&LanguageId=en&Category='+catID);
        else
            return this.httpClient.get('http://myonestory.sakkou.org/API/myonestory/GetBookList?APIKey=2ff4ac8fef7ca0cbf848d119e0cd25f3&Project=PMOS&LanguageId=en');

    }

    fetchBook()
    {

    }
}