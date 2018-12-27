export  class Book {
    id: number ;
    title: string;
    slug:string;
    image: string;
    price: number ;
    desc:string;
    cat:number;

    constructor(id: number, cat:number , title: string,slug:string , image: string ,price: number , desc: string) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.desc = desc;
        this.image=image;
        this.price=price;
        this.cat=cat;
    }


}



