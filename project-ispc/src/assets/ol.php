function mostrar_actividades(v_anio, v_alum) {
        if ($.fn.DataTable.isDataTable('#tablaActividades')) {
            $('#tablaActividades').DataTable().destroy();
        }

        $('#tablaActividades').DataTable({
            responsive: true,
            ordering: false,
            ajax: {
                url: 'incluido/apps_act_alum_desa.php',
                type: 'POST',
                data: {
                    accion: 'VMU_ACTI_DESA_ALUM',
                    p_anio: v_anio,
                    p_alu: v_alum
                },
                dataSrc: ''
            },
            columns: [
                {data: 'DESCRI', title: 'Actividad'},
                {data: 'FEC_I', class:"text-center"},
                {data: 'CONDICION', class:"text-center"},
                {
                    data: null,
                    title: 'Anular',
                    className: 'text-center',
                    orderable: false,
                    render: function (data, type, row) {
                        if (row.CONDICION === 'Pendiente') {
                            return `<button type="button" class="botonAnular" onclick="eliminar_pendiente('${row.VMU_OFERTA_ID}')" title="Anular postulación">
                                    <i class="fas fa-trash-alt"></i>
                                </button>`;
                        }
                        return '';
                    }
                }
            ]
        });
    }


    <tr>
                    <td style="color:#585858;font-style:italic"></td>
                    <td>Actividad</td>
                    <td align="center">Inscripción</td>
                    <td align="center">Condición</td>
                </tr>



<?php 
$p_area_id = $_POST["p_area_id"];
$p_descri = $_POST["p_descri"];

$v_sql="BEGIN SIUC.P_VMU.SET_SUG1('".$p_alum."','".$p_area_id."','".$p_descri."',:salida); END;";
$stmt = OCIParse($conn, $v_sql);
OCIBindByName($stmt,":salida", $salida, 50);
OCIExecute($stmt);
?>


<?php
        $v_entro = "N";
        $p_tipo = 'VMU_AREAS';

        $curs = oci_new_cursor($conn);

        $stmt = oci_parse($conn, "BEGIN :V_CUR := SIUC.P_VMU.GET_LIST_DATOS_VMU(:P_TIPO,:P_DATO1,:P_DATO2,:P_DATO3,:P_DATO4); END;");

        oci_bind_by_name($stmt, ':V_CUR', $curs, -1, OCI_B_CURSOR);
        oci_bind_by_name($stmt, ':P_TIPO', $p_tipo); // Corregido: enlazar como string

        oci_bind_by_name($stmt, ':P_DATO1', $dato1, -1);
        oci_bind_by_name($stmt, ':P_DATO2', $dato2, -1);
        oci_bind_by_name($stmt, ':P_DATO3', $dato3, -1);
        oci_bind_by_name($stmt, ':P_DATO4', $dato4, -1);

        oci_execute($stmt);
        oci_execute($curs);

        while($row = oci_fetch_array($curs, OCI_ASSOC + OCI_RETURN_NULLS))
         { $v_entro = "S";
		 	   $v_area_id = $row["AREA_ID"];
			   $v_descri = $row["NOMB_AREA"];
			    ?>
				<option value="<?php echo($v_area_id) ?>"><?php echo($v_descri) ?></option>
		<?php } OCIFreeStatement($stmt); OCIFreeCursor($curs); ?>
		</select>
		</div>
		</div>