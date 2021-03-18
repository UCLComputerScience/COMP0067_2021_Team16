import React,{useContext} from 'react';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const Database = React.createContext(null);

export function Access_Database(){
    return useContext(Database);
}

async function is_database_empty(db){
    let result = true;
    try{
        test = await db.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name='Slideshow'`);
        if (test[0].length == 0){
            result = true;
        }
        else{
            result = false;
        }
    }
    catch{
        result = true;
    }
    return result;
}

async function insert_default_data(db){
    try{
        //Insertind default slideshows
        db.executeSql(
            `INSERT INTO "Slideshow" VALUES 
            (1,'Sea Creature Skeletons',0,1,1),
            (2,'Floating Sea Animals',1,1,1),
            (3,'Seafloor Animals',2,1,1),
            (4,'Jellyfish',3,1,1)`
        );

        //Inserting deafault slides
        db.executeSql(
            `INSERT INTO "Slide" VALUES 
            (1,'../default_images/asteroblastusstellatus.png','Asteroblastus Stellatus',NULL,1,NULL),
            (2,'../default_images/botryllusschlosseri.png','Botryllus Schlosseri',NULL,1,NULL),
            (3,'../default_images/cannorrhizaconnexa.png','Cannorrhiza Connexa',NULL,1,NULL),
            (4,'../default_images/cassiopeaandromeda.png','Cassiopea Andromeda',NULL,1,NULL),
            (5,'../default_images/centrostephanuslongispinus.png','Centrostephanus Longispinus',NULL,1,NULL),
            (6,'../default_images/haeckelianaporcellana.png','Haeckeliana Porcellana',NULL,1,NULL),
            (7,'../default_images/hemipholiscordifera.png','Hemipholis Cordifera',NULL,1,NULL),
            (8,'../default_images/nausithoechallengeri.png','Nausithoe Challengeri',NULL,1,NULL),
            (9,'../default_images/nautiluspompilius.png','Nautilus Pompilius',NULL,1,NULL),
            (10,'../default_images/poliopogonamadou.png','Poliopogon Amadou',NULL,1,NULL),
            (11,'../default_images/porpitaprunella.png','Porpita Prunella',NULL,1,NULL),
            (12,'../default_images/solmaris.png','Solmaris',NULL,1,NULL);`
        );
        
        //connecting default slides to default slideshows
        db.executeSql(
            `INSERT INTO "Slideshow_Slide" VALUES 
            (1,1,NULL,0),
            (1,9,NULL,1),
            (1,6,NULL,2),
            (1,5,NULL,3),
            (1,7,NULL,4),
            (1,10,NULL,5),
            (2,1,NULL,0),
            (2,11,NULL,1),
            (2,9,NULL,2),
            (2,6,NULL,3),
            (2,12,NULL,4),
            (2,8,NULL,5),
            (2,3,NULL,6),
            (3,5,NULL,0),
            (3,7,NULL,1),
            (3,2,NULL,2),
            (3,10,NULL,3),
            (3,4,NULL,4),
            (4,4,NULL,0),
            (4,12,NULL,1),
            (4,8,NULL,2),
            (4,3,NULL,3)`
        );

        
        //inserting default recordings (Change this when we get our recordings!!!)
        db.executeSql(`SELECT * FROM Slideshow LIMIT 1`);
    }
    catch{
        console.log("failed to insert data");
    }
}

async function insert_tables(db){
    console.log("attempting to create tables");
    try{
        //Slideshow table
        db.executeSql(`CREATE TABLE IF NOT EXISTS "Slideshow" (
            "slideshow_id"	INTEGER NOT NULL,
            "slideshow_name"	NUMERIC NOT NULL UNIQUE,
            "slideshow_order"	INTEGER NOT NULL,
            "default_flag"	INTEGER NOT NULL CHECK("default_flag" == 0 OR "default_flag" == 1),
            "slideshow_enabled"	INTEGER NOT NULL CHECK("slideshow_enabled" == 0 OR "slideshow_enabled" == 1),
            PRIMARY KEY("slideshow_id" AUTOINCREMENT)
        )`);

        //Recording table
        db.executeSql(`CREATE TABLE IF NOT EXISTS "Recording" (
            "recording_id"	INTEGER NOT NULL,
            "recording_src"	TEXT NOT NULL,
            "recording_name"	TEXT,
            "default_flag"	INTEGER NOT NULL CHECK("default_flag" == 0 OR "default_flag" == 1),
            PRIMARY KEY("recording_id" AUTOINCREMENT)
        )`);

        //Slideshow_Slide table
        db.executeSql(`CREATE TABLE IF NOT EXISTS "Slideshow_Slide" (
            "slideshow_id"	INTEGER NOT NULL,
            "slide_id"	INTEGER NOT NULL,
            "recording_id"	INTEGER DEFAULT NULL,
            "slide_position"	INTEGER NOT NULL,
            FOREIGN KEY("slideshow_id") REFERENCES "Slideshow"("slideshow_id"),
            FOREIGN KEY("slide_id") REFERENCES "Slide"("slide_id"),
            FOREIGN KEY("recording_id") REFERENCES "Recording"("recording_id")
        )`);

        //Slide table
        db.executeSql(`CREATE TABLE IF NOT EXISTS "Slide" (
            "slide_id"	INTEGER NOT NULL,
            "slide_src"	TEXT NOT NULL,
            "slide_name"	TEXT,
            "slide_text"	TEXT,
            "default_flag"	INTEGER NOT NULL CHECK("default_flag" == 0 OR "default_flag" == 1),
            "default_recording_id"	INTEGER,
            PRIMARY KEY("slide_id" AUTOINCREMENT)
        )`);
    }
    catch{
        console.log("table creation failed");
    }
}

async function initializeorconnecttoDatabase(){
    try{
        let db = await SQLite.create({
            name: 'newbornbaby.db',
            location: 'default'
        });
        console.log("Sucessfully connected to database");
        
        let new_database = await is_database_empty(db);

        if (new_database){
            await insert_tables(db);
            await insert_default_data(db);
        }
        
        return db;
    }
    catch{
        console.log("Database connection failed");
    } 
}

const AppDatabase = initializeorconnecttoDatabase();

export const DatabaseProvider: React.FC = ({children}) => {    
    return(
        <Database.Provider value={AppDatabase}>
                {children}
        </Database.Provider>

    );
}