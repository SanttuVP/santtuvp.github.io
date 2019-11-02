var wms_layers = [];


        var lyr_OpenStreetMapMonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap Monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
                url: 'http://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var format_ob_1 = new ol.format.GeoJSON();
var features_ob_1 = format_ob_1.readFeatures(json_ob_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ob_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ob_1.addFeatures(features_ob_1);
var lyr_ob_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ob_1, 
                style: style_ob_1,
                interactive: true,
                title: '<img src="styles/legend/ob_1.png" /> ob'
            });

lyr_OpenStreetMapMonochrome_0.setVisible(true);lyr_ob_1.setVisible(true);
var layersList = [lyr_OpenStreetMapMonochrome_0,lyr_ob_1];
lyr_ob_1.set('fieldAliases', {'Name': 'Name', 'Description': 'Description', 'Link': 'Link', 'size': 'size', });
lyr_ob_1.set('fieldImages', {'Name': '', 'Description': '', 'Link': '', 'size': '', });
lyr_ob_1.set('fieldLabels', {'Name': 'inline label', 'Description': 'inline label', 'Link': 'inline label', 'size': 'no label', });
lyr_ob_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});