sp_help materiales

CREATE TABLE Materiales
(
Clave numeric(5), 
Descripcion varchar(50),
Costo numeric(8,2)
)

CREATE TABLE Proveedores
(
RFC char(13), 
RazonSocial varchar(50),
)

CREATE TABLE Proyectos
(
Numero numeric(5), 
Denominacion varchar(50),
)



CREATE TABLE Entregan
(
Clave numeric(5), 
RFC char(13),
Numero numeric(5),
Fecha datetime,
Cantidad numeric(8,2)
)



BULK INSERT a1702080.a1702080.[Proyectos]
FROM 'e:\wwwroot\a1702080\proyectos.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)


SELECT * FROM Entregan

BULK INSERT a1702080.a1702080.[Proveedores]
FROM 'e:\wwwroot\a1702080\proveedores.csv'
WITH(
	CODEPAGE = 'ACP',
	FIELDTERMINATOR = ',',
	ROWTERMINATOR = '0x0a'
)

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

SELECT * FROM Materiales