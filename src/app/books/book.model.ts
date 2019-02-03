export  class Book {
    BookId: number ;
    CategoryId : number;
    CategoryName:string;
    BookName: string;
    BookTitle: string ;
    Description:string;
    PageCount:number;
    SalePrice :string;
    CurrencyId:number;
    CurrencyName:string;
    BookImageId:number;
    ImageCode:number;
    ImageUrl:string;

    constructor( BookId: number ,
                 CategoryId : number,
                 CategoryName:string,
                 BookName: string,
                 BookTitle: string ,
                 Description:string,
                 PageCount:number,
                 SalePrice :string,
                 CurrencyId:number,
                 CurrencyName:string,
                 BookImageId:number,
                 ImageCode:number,
                 ImageUrl:string)
    {
        this.BookId = BookId;
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
        this.BookName = BookName;
        this.BookTitle=BookTitle;
        this.Description=Description;
        this.PageCount=PageCount;
        this.SalePrice = SalePrice;
        this.CurrencyId = CurrencyId;
        this.CurrencyName = CurrencyName;
        this.BookImageId=BookImageId;
        this.ImageCode=ImageCode;
        this.ImageUrl=ImageUrl;
    }


}

// export  class Book {
//     id: number ;
//     title: string;
//     slug:string;
//     image: string;
//     price: number ;
//     desc:string;
//     cat:number;
//
//     constructor(id: number, cat:number , title: string,slug:string , image: string ,price: number , desc: string) {
//         this.id = id;
//         this.title = title;
//         this.slug = slug;
//         this.desc = desc;
//         this.image=image;
//         this.price=price;
//         this.cat=cat;
//     }
//
//
// }



