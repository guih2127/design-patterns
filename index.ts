import { MyDatabaseClassic } from "./creational/singleton/db/my-database-classic";
import { MyDatabaseModule } from "./creational/singleton/db/my-database-module";

const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;

console.log(db1 === db2);

db1.add({ name: "Luiz", age: 30 });
db1.show();

const db3 = MyDatabaseModule;

db3.add({ name: "Guilherme", age: 27 });
db3.show();
