var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });var format_tamankota_2 = new ol.format.GeoJSON();
var features_tamankota_2 = format_tamankota_2.readFeatures(json_tamankota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamankota_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tamankota_2.addFeatures(features_tamankota_2);var lyr_tamankota_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tamankota_2, 
                style: style_tamankota_2,
                title: '<img src="styles/legend/tamankota_2.png" /> taman kota'
            });var format_sungai_3 = new ol.format.GeoJSON();
var features_sungai_3 = format_sungai_3.readFeatures(json_sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sungai_3.addFeatures(features_sungai_3);var lyr_sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_3, 
                style: style_sungai_3,
                title: '<img src="styles/legend/sungai_3.png" /> sungai'
            });var format_jalan_kota_4 = new ol.format.GeoJSON();
var features_jalan_kota_4 = format_jalan_kota_4.readFeatures(json_jalan_kota_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_kota_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_kota_4.addFeatures(features_jalan_kota_4);var lyr_jalan_kota_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_kota_4, 
                style: style_jalan_kota_4,
                title: '<img src="styles/legend/jalan_kota_4.png" /> jalan_kota'
            });var format_wisata_pantai_5 = new ol.format.GeoJSON();
var features_wisata_pantai_5 = format_wisata_pantai_5.readFeatures(json_wisata_pantai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wisata_pantai_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_wisata_pantai_5.addFeatures(features_wisata_pantai_5);var lyr_wisata_pantai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wisata_pantai_5, 
                style: style_wisata_pantai_5,
                title: '<img src="styles/legend/wisata_pantai_5.png" /> wisata_pantai'
            });var format_mall_6 = new ol.format.GeoJSON();
var features_mall_6 = format_mall_6.readFeatures(json_mall_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mall_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_mall_6.addFeatures(features_mall_6);var lyr_mall_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mall_6, 
                style: style_mall_6,
                title: '<img src="styles/legend/mall_6.png" /> mall'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_tamankota_2.setVisible(true);lyr_sungai_3.setVisible(true);lyr_jalan_kota_4.setVisible(true);lyr_wisata_pantai_5.setVisible(true);lyr_mall_6.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_jalan_1,lyr_tamankota_2,lyr_sungai_3,lyr_jalan_kota_4,lyr_wisata_pantai_5,lyr_mall_6];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', });
lyr_tamankota_2.set('fieldAliases', {'id': 'id', 'taman kota': 'taman kota', 'Foto': 'Foto', });
lyr_sungai_3.set('fieldAliases', {'id': 'id', 'sungai': 'sungai', });
lyr_jalan_kota_4.set('fieldAliases', {'id': 'id', 'jalan kota': 'jalan kota', });
lyr_wisata_pantai_5.set('fieldAliases', {'id': 'id', 'wisata pan': 'wisata pan', 'foto': 'foto', });
lyr_mall_6.set('fieldAliases', {'id': 'id', 'mall': 'mall', 'foto': 'foto', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', });
lyr_tamankota_2.set('fieldImages', {'id': 'TextEdit', 'taman kota': 'Photo', 'Foto': 'Photo', });
lyr_sungai_3.set('fieldImages', {'id': 'TextEdit', 'sungai': 'TextEdit', });
lyr_jalan_kota_4.set('fieldImages', {'id': 'TextEdit', 'jalan kota': 'TextEdit', });
lyr_wisata_pantai_5.set('fieldImages', {'id': 'TextEdit', 'wisata pan': 'Photo', 'foto': 'TextEdit', });
lyr_mall_6.set('fieldImages', {'id': 'TextEdit', 'mall': 'Photo', 'foto': 'TextEdit', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'jalan': 'no label', });
lyr_tamankota_2.set('fieldLabels', {'id': 'no label', 'taman kota': 'no label', 'Foto': 'no label', });
lyr_sungai_3.set('fieldLabels', {'id': 'no label', 'sungai': 'no label', });
lyr_jalan_kota_4.set('fieldLabels', {'id': 'no label', 'jalan kota': 'no label', });
lyr_wisata_pantai_5.set('fieldLabels', {'id': 'no label', 'wisata pan': 'no label', 'foto': 'no label', });
lyr_mall_6.set('fieldLabels', {'id': 'no label', 'mall': 'no label', 'foto': 'no label', });
lyr_mall_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});