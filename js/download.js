function descargarcsv() {
  $('#tabla-resultados').TableCSVExport({
      delivery: 'download',
      filename: 'descarga.csv'
  });
}
