interface Category extends Item {

    code: string;
    name: Map<string, string>;
    parent: Category;

}