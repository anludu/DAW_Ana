--Eliminar tablas
drop TABLE entregan 
drop TABLE materiales 
drop TABLE proyectos 
drop TABLE Proveedores 

--Crear tablas
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

DROP TABLE Materiales 

CREATE TABLE Materiales 
( 
  Clave numeric(5) not null, 
  Descripcion varchar(50), 
  Costo numeric (8,2) 
) 

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')

CREATE TABLE Proveedores 
( 
  RFC char(13) not null, 
  RazonSocial varchar(50) 
) 


IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')

CREATE TABLE Proyectos 
( 
  Numero numeric(5) not null, 
  Denominacion varchar(50) 
) 
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

CREATE TABLE Entregan 
( 
  Clave numeric(5) not null, 
  RFC char(13) not null, 
  Numero numeric(5) not null, 
  Fecha DateTime not null, 
  Cantidad numeric (8,2) 
) 

--Insertar datos en las tablas

BULK INSERT a1702080.a1702080.[Materiales]
FROM 'e:\wwwroot\a1702080\materiales.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)

SET DATEFORMAT dmy
BULK INSERT a1702080.a1702080.[Entregan]
FROM 'e:\wwwroot\a1702080\entregan.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)

BULK INSERT a1702080.a1702080.[Proveedores]
FROM 'e:\wwwroot\a1702080\proveedores.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)

BULK INSERT a1702080.a1702080.[Proyectos]
FROM 'e:\wwwroot\a1702080\proyectos.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)

SELECT * FROM Materiales

--Agregar nuevo registro  en la tabla materiales:
INSERT into Materiales values(1000,'Pegamento', 1000)

SELECT * FROM Materiales
WHERE Clave = 1000

DELETE FROM Materiales WHERE Clave = 1000 and Costo = 1000

--declarar llaves primarias

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales values(1000, 'Pegamento', 1000)

 --revisar si la tabla tiene algún constrain

sp_helpconstraint Entregan

-- Declarar como llaves primarias en proveedores, proyectos y entregan

 ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)

 ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)

 ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY CLUSTERED(Fecha, Numero, RFC, Clave)
  
 ALTER TABLE Entregan drop constraint llaveEntregan


SELECT * FROM Materiales
SELECT * FROM Proveedores 
SELECT * FROM Proyectos
SELECT * FROM Entregan

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ; 
Delete from Entregan where Clave = 0 

--Agregar llaves foraneas
ALTER TABLE entregan ADD CONSTRAINT cfentreganclave FOREIGN KEY (clave) REFERENCES Materiales(clave); 
ALTER TABLE entregan ADD CONSTRAINT cfentreganclave FOREIGN KEY (clave) REFERENCES Proveedores(RFC); 
ALTER TABLE entregan ADD CONSTRAINT cfentreganclave FOREIGN KEY (clave) REFERENCES Proyectos(número); 

--Ejecicio 4
INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0); 
DELETE FROM Entregan where Clave = 0

ALTER TABLE Entregan add constraint cantidad check (cantidad > 0) ; 


