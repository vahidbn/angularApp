// export  class Menu {
//     menuid: number ;
//     menuTitle: string;
//     menuicon: string;
//
//  constructor(menuid: number , menuTitle: string , menuicon: string )
//  {
//     this.menuid = menuid;
//     this.menuTitle = menuTitle;
//     this.menuicon = menuicon;
// }
//
// }
//


export  class Menu {
    id: number ;
    Name: string;
    Text: string;
    Image: string;
    Slug:string;

    constructor(id: number , Name: string , Text: string ,Image:string ,Slug:string)
    {
        this.id = id;
        this.Name = Name;
        this.Text = Text;
        this.Image = Image;
        this.Slug = Slug;
    }

    // export  class Menu {
    // id: number ;
    // userId: number;
    // title: string;
    // body: string;
    //
    // constructor(id: number , userId: number , title: string ,body:string)
    // {
    //     this.id = id;
    //     this.userId = userId;
    //     this.title = title;
    //     this.body = body;
    // }

}
