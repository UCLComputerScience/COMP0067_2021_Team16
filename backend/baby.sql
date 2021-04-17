DROP DATABASE IF EXISTS baby;
CREATE DATABASE baby;
USE baby;

CREATE TABLE `emails` (
`email_id` INT(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
`email_address` VARCHAR(255) NOT NULL,
`email_first_name` VARCHAR(255) NOT NULL,
`email_last_name` VARCHAR(255) NOT NULL,
`email_date_registered` VARCHAR(255) NULL,
`email_consent` VARCHAR(255) NOT NULL
);

CREATE TABLE `slideshow_category` (
`slideshow_id` INT(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
`slideshow_type` VARCHAR(255) NOT NULL,
`slideshow_name` VARCHAR(255) NOT NULL
);

CREATE TABLE `images` (
`image_id` INT(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
`image_name` VARCHAR(255) NOT NULL,
`image_text` VARCHAR(2555) NULL,
`image_file_name` VARCHAR(255) NOT NULL,
`image_url` VARCHAR(255) NOT NULL,
`image_audio_file_name` VARCHAR(255) NULL,
`image_audio_url` VARCHAR(255) NULL
);

CREATE TABLE `slideshows` (
`order` INT(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
`slideshow_id` INT(100) NOT NULL,
`image_id` INT(100) NOT NULL
);

CREATE TABLE `music` (
`music_id` INT(100) PRIMARY KEY AUTO_INCREMENT NOT NULL,
`music_name` VARCHAR(255) NOT NULL,
`music_url` VARCHAR(255) NOT NULL
);

INSERT INTO emails (email_address,email_first_name,email_last_name,email_consent) VALUES ("caroline.crandell.20@ucl.ac.uk","Caroline","Crandell","I consent to receiving updates about future products");

INSERT INTO emails (email_address,email_first_name,email_last_name,email_consent) VALUES ("giuseppe.baldini.20@ucl.ac.uk","Giuseppe","Baldini","I consent to receiving updates about future products");

INSERT INTO emails (email_address,email_first_name,email_last_name,email_consent) VALUES ("chenuka.ratwatte.20@ucl.ac.uk","Chenuka","Ratwatte","I consent to receiving updates about future products");

INSERT INTO slideshow_category (slideshow_type,slideshow_name) VALUES ("default","All Images");

INSERT INTO slideshow_category (slideshow_type,slideshow_name) VALUES ("default","Sea Creatures Skeletons");

INSERT INTO slideshow_category (slideshow_type,slideshow_name) VALUES ("default","Floating Sea Animals");

INSERT INTO slideshow_category (slideshow_type,slideshow_name) VALUES ("default","Sea Floor Animals");

INSERT INTO slideshow_category (slideshow_type,slideshow_name) VALUES ("default","Jellyfish");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("ASTEROBLASTUS STELLATUS","Asteroblastus stellatus is an ancestor of the Sea Lily; the animal that looks like a starfish on a stalk. They were around over 450 million years ago when fish with jaws were about to appear. With this new threat Blastoid creatures evolved the ability to regenerate. Surviving Sea Lilies possess ancestoral skeletal five-sector symmetry and similarly attach themselves to the rocky bottom by a stalk. The Sea Lily mostly eats suspended particles in the water that float by, such as plankton. It uses grooves within its five radiating petals to capture food. These work like tiny conveyors delivering food into its mouth in the centre.","asteroblastusstellatus.png","https://babyobjectstorage.blob.core.windows.net/babyblob/asteroblastusstellatus.png","asteroblastusstellatus.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/asteroblastusstellatus.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("PORPITA PRUNELLA","Commonly known as the blue button jellyfish, but it is not really a jellyfish. Actually, it is a colony of carnivores! These are called hydroids, a relative of the jellyfish. Surrounded by other small animals called zooids that form tentacles with stinging knobs at their ends called nematocysts. These tiny individual animals live together harmoniously by performing specific roles. One variety has radiating tentacles to catch prey, reproduce and digest. Other clusters of individuals keep the colony afloat by creating a gas-filled disc in the middle which is hardened by chitinous material. Chitin is so strong and flexible that it is used as surgical thread. Due to its natural biodegradable properties it dissolves, and has even been found to accelerate the healing of wounds.","porpitaprunella.png","https://babyobjectstorage.blob.core.windows.net/babyblob/porpitaprunella.png","porpitaprunella.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/porpitaprunella.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("POLIOPOGON AMADOU","This animal is composed of thousands of silica needles, called spicule. Consequently, its common name is Glass Sponge. It grows into a tall vase form becoming home to a monogamous shrimp couple that enters this Glass 'house' to remain there for the rest of their lives. Only their tiny offspring can eventually leave this home, through small windows of this Glass house. In Japan, this vase-like animal symbolises eternal love and are given as wedding gifts. The extraordinary structures of the Glass house are studied by architects to improve structural performance and flexibility of buildings.","poliopogonamadou.png","https://babyobjectstorage.blob.core.windows.net/babyblob/poliopogonamadou.png","poliopogonamadou.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/poliopogonamadou.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("BOTRYLLUS SCHLOSSERI","Botryllus schlosseri is between 2-4mm in diameter and squirts water if disturbed, hence the name, the sea-squirt! The star-like pattern of the colony, called the 'test', inspired its common name the Golden Star Tunicate. A colony of sea-squirts is covered in a jelly and would fit in your palm. Each zooid generates a current of water through pulsating cilia, the tiny hairs inside their bodies. As a result, water saturated with plankton is attracted to the mouth opening where food is trapped in mucus which then passes to the stomach. Once digested the remains are passed into a common chamber shared by the whole colony. Bortyllus loves sheltered areas like ship docks, and are very common around the coasts of Britain.","botryllusschlosseri.png","https://babyobjectstorage.blob.core.windows.net/babyblob/botryllusschlosseri.png","botryllusschlosseri.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/botryllusschlosseri.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("CASSIOPEA ANDROMEDA","In Turkey this is called the alien jellyfish. It often invades tourist lagoons, lying at the bottom of muddy, marshy shallow water. Lying upside down with its mouth upwards, it vibrates its arms to bring food to its mouth. Whilst its appearance pretends to be a benign sea anemone, it is in fact a poisonous jellyfish. Its scientific name references the Greek myth of Queen Cassiopeia and her daughter Andromeda. In the story, Andromeda is chained to the rocks and destined to be eaten by the sea monster until rescued by the greatest Greek hero, Perseus. After an adventure beheading the Gorgon Medusa, he saves Andromeda on the winged horse Pegasus. All ends well; they marry, have beautiful children, and live happily ever after.","cassiopeaandromeda.png","https://babyobjectstorage.blob.core.windows.net/babyblob/cassiopeaandromeda.png","cassiopeaandromeda.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/cassiopeaandromeda.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("HEMIPHOLIS CORDIFERA","This is a picture of a mouth on the central disc portion of a starfish skeleton, commonly known as a Brittle Starfish. In the living creature 5 long arms sprawl outward from this disc. The Brittle Star possesses the ability to regenerate its lost arms and even part of the damaged disc, hence its name! Its mouth, with 5 jaws, is on the underside of the disc, which is also their bottom! They can capture food by raising their body onto their arms and trapping food in a mucus net spread between the spines of their arms. Some species of brittle stars are bioluminescent and emit light.","hemipholiscordifera.png","https://babyobjectstorage.blob.core.windows.net/babyblob/hemipholiscordifera.png","hemipholiscordifera.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/hemipholiscordifera.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("CENTROSTEPHANUS LONGISPINUS","Centrostephanus longispinus literally means long-spine sea-urchin. In fact, the spines are around three times longer than their body. These long needle-like spines have a cell structure that can change conformation, enabling it to change to a different hue in response to a change in its surroundings - camouflage. When in shallow water in a hot country, these urchins manage to hold up seaweed or even shells on long finger-like spines to make an umbrella to hide from the hot sun! As they are rather prickly, procreation happens outside their bodies; entailing the simultaneous release of eggs and sperm into the water. This is coordinated by the urchins releasing a chemical pheromone, so that the neighbouring urchin can sense that it is baby making season.","centrostephanuslongispinus.png","https://babyobjectstorage.blob.core.windows.net/babyblob/centrostephanuslongispinus.png","centrostephanuslongispinus.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/centrostephanuslongispinus.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("NAUTILUS POMPILIUS","Nautili have inhabited the Earth since about 500 million years ago, even before dinosaurs. They are considered to be 'living fossils' as they look the same as they did these millions of years ago. A nautilus dives just like a submarine. It uses an argon - nitrogen gas filled shell chamber to regulate its buoyancy and empties its 'dive-tanks' to descend. It travels up to the surface from a depth of 2000 feet at sunset to feed and then goes back down again at sunrise. The nautilus incubation period is as long as a human baby's! It ranges from nine months to over a year.","nautiluspompilius.png","https://babyobjectstorage.blob.core.windows.net/babyblob/nautiluspompilius.png","nautiluspompilius.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/nautiluspompilius.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("HAECKELIANA PORCELLANA","Haeckeliana porcellana is a zooplankton floating in abundance across our seas and oceans. Being so small, at less than half a millimetre in diameter (about as thick as a baby's thumb nail), it is classed as a nanoplankton. It is named 'Porcellana', due to its exquisite silica-built exoskeleton, the same material used to create very fine translucent china. Silica is vital to our healthy teeth, bones, nails, blood vessels and more. The best source for it is oats, but we can also obtain it from water and bread, mangos and bananas, spinach and even beer!","haeckelianaporcellana.png","https://babyobjectstorage.blob.core.windows.net/babyblob/haeckelianaporcellana.png","haeckelianaporcellana.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/haeckelianaporcellana.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("CANNORRHIZA CONNEXA","This jellyfish has eight frilly oral arms instead of a mouth and lacks tentacles on the bell's rim. It belongs to the order of jellyfish called Rhizostomae, which translated from the Greek means 'roots from the mouth'. Their mouth is fused. They eat like a sponge via suctorial minimouths, located all along these oral arms. As Rhizostomae do not have tentacles, that other jellyfish use to capture prey, they use tiny arrow cells to immobilise their prey or eat whatever just happened to pass through their oral arms. This variety of jellyfish is edible and very popular in Japan and China. It is also fished for its medicinal properties.","cannorrhizaconnexa.png","https://babyobjectstorage.blob.core.windows.net/babyblob/cannorrhizaconnexa.png","cannorrhizaconnexa.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/cannorrhizaconnexa.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("NAUSITHOE CHALLENGERI","This tiny jellyfish, just over 10 mm wide, belongs to a class of immortal beings! This animal can regress to its younger form and regenerate again and again. It is an evolved form of survival. In their mature form they can reproduce through sharing eggs and sperm. However; if life becomes tough and the environment is threatening their survival, they can drop to the floor of the ocean, become younger selves, and grow as a polyp in a colony that looks like long stalks. When the time is right, they just slice or bud themselves off the stalk and swim away to enjoy single life again. The later process is called a reverse ontogeny.","nausithoechallengeri.png","https://babyobjectstorage.blob.core.windows.net/babyblob/nausithoechallengeri.png","nausithoechallengeri.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/nausithoechallengeri.mp3");

INSERT INTO images (image_name,image_text,image_file_name,image_url,image_audio_file_name,image_audio_url) VALUES ("SOLMARIS","This miniature jellyfish is a width of your thumb nail and possesses a truly invisible cloak that is transparent like the water it inhabits. Solmaris wears its stomach like a hula-hoop; as tube that runs around the entire edge of the jellyfish umbrella. The outermost 'skin' of the jellyfish umbrella is named the exumbrella. Solmaris sense organs and exumbrellar are fluorescent. They light up under the blue to ultraviolet light range. The green fluorescent protein gene was first isolated in a jellyfish and since has been introduced into many organisms; from bacteria to fungi, plants, flies and even mammalian and human cells. This gene can also be passed on to the next generation.","solmaris.png","https://babyobjectstorage.blob.core.windows.net/babyblob/solmaris.png","solmaris.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/solmaris.mp3");

INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,1);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,2);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,3);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,4);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,5);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,6);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,7);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,8);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,9);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,10);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,11);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (1,12);

INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,1);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,8);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,9);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,7);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,6);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (2,3);

INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,1);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,2);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,8);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,9);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,12);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,11);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (3,10);

INSERT INTO slideshows (slideshow_id,image_id) VALUES (4,7);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (4,6);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (4,4);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (4,3);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (4,5);

INSERT INTO slideshows (slideshow_id,image_id) VALUES (5,5);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (5,12);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (5,11);
INSERT INTO slideshows (slideshow_id,image_id) VALUES (5,10);

INSERT INTO music (music_name,music_url) VALUES ("waves.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/waves.mp3");

INSERT INTO music (music_name,music_url) VALUES ("seagull.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/seagull.mp3");

INSERT INTO music (music_name,music_url) VALUES ("stream.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/stream.mp3");

-- INSERT INTO music (music_name,music_url) VALUES ("background_sounds.mp3","https://babyobjectstorage.blob.core.windows.net/babyblob/background_sounds.mp3");

-- INSERT INTO music (music_name,music_url) VALUES ("Ambience, Lighthouse, Iceland, 19232, 01.wav","https://babyobjectstorage.blob.core.windows.net/babyblob/Ambience, Lighthouse, Ocean, Coast, Birds, Seagulls, Arctic Terns, Calm Wind, Iceland, 19232, 01.wav");

-- INSERT INTO music (music_name,music_url) VALUES ("Hydrophone, Underwater, Hot Pot, Iceland, 19232, 02.WAV","https://babyobjectstorage.blob.core.windows.net/babyblob/Hydrophone, Underwater, Hot Pot, Bubbles, Pool, Iceland, 19232, 02.WAV");

-- INSERT INTO music (music_name,music_url) VALUES ("Hydrophone, Underwater, Stream, Cyprus, Zoom F8n, LimpetMics, 14.wav","https://babyobjectstorage.blob.core.windows.net/babyblob/Hydrophone, Underwater, Stream, Waterfall, Floating, Flowing, Water, Creek, Strong, Nature, Forest, Spring, Caledonia Waterfall, Cyprus, Zoom F8n, LimpetMics, 14.wav");

-- INSERT INTO music (music_name,music_url) VALUES ("Nature, Ocean, Cyprus, Zoom H3 VR, 9624,Stereo Export.WAV","https://babyobjectstorage.blob.core.windows.net/babyblob/Nature, Ocean, Ocean Waves, Sea, Mediterranean Sea, Calm, Relaxing, Beach, Rocky Beach, Pissouri Beach, Cyprus, Zoom H3 VR, 9624,Stereo Export.WAV");

-- INSERT INTO music (music_name,music_url) VALUES ("Ocean, Calm Waves, Iceland, 19232, 02.wav","https://babyobjectstorage.blob.core.windows.net/babyblob/Ocean, Calm Waves, Rocky Beach, Splash, Nighttime, Relaxing, Bubbling, Westfjords, Iceland, 19232, 02.wav");