import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


async function random(){
    SQLite.create({ name: 'test.db', location: 'default'}).then(x => console.log(x)).catch(x => console.log(x));
    let db = await SQLite.create({
        name: 'newbornbaby.db',
        location: 'default'
    })
    console.log(db);
    await random2(db);
}

async function random2(db){
    await db.executeSql(`CREATE TABLE "Slideshow" (
        "slideshow_id"	INTEGER NOT NULL,
        "slideshow_name"	NUMERIC NOT NULL UNIQUE,
        "slideshow_order"	INTEGER NOT NULL,
        "default_flag"	INTEGER NOT NULL CHECK(default_flag ==0 or default_flag ==1),
        "slideshow_enabled"	INTEGER NOT NULL CHECK(slideshow_enabled ==0 or slideshow_enabled==1),
        PRIMARY KEY("slideshow_id" AUTOINCREMENT))`);

        console.log("ok");
}

random();




