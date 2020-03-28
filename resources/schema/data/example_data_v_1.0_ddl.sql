INSERT INTO PHONE_VERIFICATION VALUES
(1,'0678458956',562487,156123789);

----------------------------------AUTHORITY----------------------------------------

INSERT INTO CAIDAT VALUES
(1,'caidat 34 roche noir','تعلق 34 صخرة سوداء',null,'2020-03-15',1.1,2.5),
(2,'caidat 33 roche noir','تعلق 33صخرة سوداء',null,'2020-03-15',1.1,2.5),
(3,'caidat 32 roche noir','تعلق 32صخرة سوداء',null,'2020-03-15',1.1,2.5);


INSERT INTO CAIDAT_COMMUNE_ASSOCIATION VALUES
(1,'01.051.01.01.'),
(2,'01.051.01.01.'),
(3,'01.051.01.01.');

INSERT INTO AUTHORITY_ROLE VALUES
(1,'AGENT'),
(2,'CHIEF');

INSERT INTO AUTHORITY VALUES
(1,'لطفي سلامة',0678458956,'afe931bc3193',1,1,'2',1),
(2,'عبد الرحمن خليفة ',0636158226,'afe931bc3193',1,2,null,1);


----------------------------------------SUBVENTION---------------------------------------

INSERT INTO SUBVENTION_ACTOR_ROLE VALUES
(1,'AGENT'),
(2,'SUPERVISOR');

INSERT INTO SUBVENTION_ACTOR VALUES
(1,'Hamid','Youssfi','hyoussfi','a4984518798',1,'065454646',1);

INSERT INTO SUBVENTION_ACTOR_LOCATION VALUES
(1,'06.141.');

INSERT INTO SUBVENTION_TYPE VALUES
(1,'MANDATI'),
(2,'MWALLET'),
(3,'GAB_EXPRESS');





----------------------------------------REQUEST---------------------------------------

INSERT INTO REQUEST_STATUS VALUES
(1,'RECEIVED'),
(2,'CONFIRMED'),
(3,'VALIDATED'),
(4,'REJECTED');

INSERT INTO REQUEST_ACTOR_TYPE VALUES
(1,'AUTHORITY'),
(2,'SUBVENTOR');

INSERT INTO FAMILY_STATUS VALUES
(1,'SINGLE'),
(2,'MARRIED'),
(3,'DIVORCED'),
(4,'WIDOW');

INSERT INTO REQUEST_REJECT_REASON VALUES
(1,'unknown','the person is unknown');

INSERT INTO REQUEST VALUES
(1,'محمد ناصر', 'BH4444','BH4444_34734893.jpg','BH4444_343746.jpg','0645676722','67 Rue humman lfetwaki Oulfa','30 Rue lmokhtar Essalmi Bournazil','njaar','متوقف حاليًا بسبب الحجر الصحي','01.','01.051.',null,'01.051.01.01.','1',null,null,null,null,'2020-03-27','1','2','3',null),
(2,'سامي خضر', 'BJ8484','BJ8484_1212.jpg','BJ8484_1242jpg','0645231187','55 Rue Imanowel Biranzaran','21 Rue Essaqia Elhamra Bernosi','chauffeur','متوقف حاليًا بسبب الحجر الصحي','01.','01.051.',null,'01.051.01.03.','1',null,null,null,null,'2020-03-27','2','1','0',null),
(3,'عائشة آيت دوتش', 'BG9978','BG9978_5677.jpg','BG9978_567445.jpg','0621348791','43 Rue Immam Malik 2 mars','43 Rue Immam Malik 2 mars','jardinier','متوقف حاليًا بسبب الحجر الصحي','01.','01.051.',null,'01.051.01.03.','3','1','2',null,'2020-03-28','2020-03-27','2','3','1','ER48798'),
--(4,'حامد كابر', 'BG3923','BG3923_35546.jpg','BG3923_35221.jpg','0678443328','02 Rue Limoun Derbghallef',null,null,'بدون عمل بسبب العودة الى البادية','01.','01.051.',null,'01.051.01.05.','1','1','2',null,'2020-03-27','2020-03-27','1','0','0',null),
(5,'علاء الدين حسان', 'BJ9887','BJ9887_766345.jpg','BJ9887_56443.jpg','0677349076','55 Rue Allal Ben Ahmed Bélveder','203 Rue El Akid Abdulrahman','MAÇONNERIE','متوقف حاليًا بسبب الحجر الصحي','01.','01.051.',null,'01.051.01.05.','2','1',null,null,null,'2020-03-27','4','2','1','ER48798');

INSERT INTO REQUEST_UPDATE_EVENT VALUES
(3,1,2,1,1,'2020-03-27'),
(4,1,2,1,1,'2020-03-27'),
(3,2,3,2,2,'2020-03-28');


INSERT INTO REQUEST_ASSIGNEMENT VALUES
(1,1,2,'2020-03-26',0);



INSERT INTO SUBVENTION VALUES
(1,1,1,1200,3,'FT45Z454',3,2020,'2020-03-30',1);
