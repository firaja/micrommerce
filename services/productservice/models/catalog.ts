interface Catalog extends Item {

    code: string;
    name: Map<string, string>;
    categories: Array<Category>;

}