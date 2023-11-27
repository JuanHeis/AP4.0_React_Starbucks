import React from 'react';
/**
*Permite mostrar cada una de las opciones en el pie. Es decir, cada item de la columna
*@param {text} opcion -Representa la leyenda de la opción que se mostrará
*@return {jsx} -Retorna un elemento jsx que representará cada opción individual de la columna analizada en un momento dado.
* 
*/
function FooterOptionsList({opcion}){

	return(
		 
			      
			      	<li className="mb-3">
			      		<a href="" className="opcion">{opcion}</a>
			      	</li>

	)


}

export default FooterOptionsList;