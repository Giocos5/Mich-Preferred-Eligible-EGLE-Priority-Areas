var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Phase1PriorityCounties_1 = new ol.format.GeoJSON();
var features_Phase1PriorityCounties_1 = format_Phase1PriorityCounties_1.readFeatures(json_Phase1PriorityCounties_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phase1PriorityCounties_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phase1PriorityCounties_1.addFeatures(features_Phase1PriorityCounties_1);
var lyr_Phase1PriorityCounties_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Phase1PriorityCounties_1, 
                style: style_Phase1PriorityCounties_1,
                popuplayertitle: 'Phase 1 Priority Counties',
                interactive: true,
                title: '<img src="styles/legend/Phase1PriorityCounties_1.png" /> Phase 1 Priority Counties'
            });
var format_EligibleAreas_2 = new ol.format.GeoJSON();
var features_EligibleAreas_2 = format_EligibleAreas_2.readFeatures(json_EligibleAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EligibleAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EligibleAreas_2.addFeatures(features_EligibleAreas_2);
var lyr_EligibleAreas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EligibleAreas_2, 
                style: style_EligibleAreas_2,
                popuplayertitle: 'Eligible Areas',
                interactive: false,
                title: '<img src="styles/legend/EligibleAreas_2.png" /> Eligible Areas'
            });
var format_PreferredAreas_3 = new ol.format.GeoJSON();
var features_PreferredAreas_3 = format_PreferredAreas_3.readFeatures(json_PreferredAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PreferredAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PreferredAreas_3.addFeatures(features_PreferredAreas_3);
var lyr_PreferredAreas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PreferredAreas_3, 
                style: style_PreferredAreas_3,
                popuplayertitle: 'Preferred Areas',
                interactive: false,
                title: '<img src="styles/legend/PreferredAreas_3.png" /> Preferred Areas'
            });
var format_EGLELevel2ChargerNeeded_4 = new ol.format.GeoJSON();
var features_EGLELevel2ChargerNeeded_4 = format_EGLELevel2ChargerNeeded_4.readFeatures(json_EGLELevel2ChargerNeeded_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGLELevel2ChargerNeeded_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGLELevel2ChargerNeeded_4.addFeatures(features_EGLELevel2ChargerNeeded_4);
var lyr_EGLELevel2ChargerNeeded_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGLELevel2ChargerNeeded_4, 
                style: style_EGLELevel2ChargerNeeded_4,
                popuplayertitle: 'EGLE Level 2 Charger Needed ',
                interactive: false,
                title: '<img src="styles/legend/EGLELevel2ChargerNeeded_4.png" /> EGLE Level 2 Charger Needed '
            });
var format_EGLEDCFastChargersNeeded_5 = new ol.format.GeoJSON();
var features_EGLEDCFastChargersNeeded_5 = format_EGLEDCFastChargersNeeded_5.readFeatures(json_EGLEDCFastChargersNeeded_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGLEDCFastChargersNeeded_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGLEDCFastChargersNeeded_5.addFeatures(features_EGLEDCFastChargersNeeded_5);
var lyr_EGLEDCFastChargersNeeded_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGLEDCFastChargersNeeded_5, 
                style: style_EGLEDCFastChargersNeeded_5,
                popuplayertitle: 'EGLE DC Fast Chargers Needed',
                interactive: true,
                title: '<img src="styles/legend/EGLEDCFastChargersNeeded_5.png" /> EGLE DC Fast Chargers Needed'
            });
var format_MIDCPublicSites_6 = new ol.format.GeoJSON();
var features_MIDCPublicSites_6 = format_MIDCPublicSites_6.readFeatures(json_MIDCPublicSites_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIDCPublicSites_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIDCPublicSites_6.addFeatures(features_MIDCPublicSites_6);
var lyr_MIDCPublicSites_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MIDCPublicSites_6, 
                style: style_MIDCPublicSites_6,
                popuplayertitle: 'MI DC Public Sites',
                interactive: true,
                title: '<img src="styles/legend/MIDCPublicSites_6.png" /> MI DC Public Sites'
            });
var format_Round1Awarded_7 = new ol.format.GeoJSON();
var features_Round1Awarded_7 = format_Round1Awarded_7.readFeatures(json_Round1Awarded_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Round1Awarded_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Round1Awarded_7.addFeatures(features_Round1Awarded_7);
var lyr_Round1Awarded_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Round1Awarded_7, 
                style: style_Round1Awarded_7,
                popuplayertitle: 'Round 1 Awarded',
                interactive: true,
                title: '<img src="styles/legend/Round1Awarded_7.png" /> Round 1 Awarded'
            });
var format_Round2Awarded_8 = new ol.format.GeoJSON();
var features_Round2Awarded_8 = format_Round2Awarded_8.readFeatures(json_Round2Awarded_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Round2Awarded_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Round2Awarded_8.addFeatures(features_Round2Awarded_8);
var lyr_Round2Awarded_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Round2Awarded_8, 
                style: style_Round2Awarded_8,
                popuplayertitle: 'Round 2 Awarded',
                interactive: true,
                title: '<img src="styles/legend/Round2Awarded_8.png" /> Round 2 Awarded'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Phase1PriorityCounties_1.setVisible(true);lyr_EligibleAreas_2.setVisible(true);lyr_PreferredAreas_3.setVisible(true);lyr_EGLELevel2ChargerNeeded_4.setVisible(true);lyr_EGLEDCFastChargersNeeded_5.setVisible(true);lyr_MIDCPublicSites_6.setVisible(true);lyr_Round1Awarded_7.setVisible(true);lyr_Round2Awarded_8.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Phase1PriorityCounties_1,lyr_EligibleAreas_2,lyr_PreferredAreas_3,lyr_EGLELevel2ChargerNeeded_4,lyr_EGLEDCFastChargersNeeded_5,lyr_MIDCPublicSites_6,lyr_Round1Awarded_7,lyr_Round2Awarded_8];
lyr_Phase1PriorityCounties_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_EligibleAreas_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Exit_': 'Exit_', 'Label': 'Label', 'Preference': 'Preference', 'Corridor': 'Corridor', 'CorridorTy': 'CorridorTy', 'Gap': 'Gap', 'GapText': 'GapText', 'City': 'City', 'County': 'County', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Utility': 'Utility', 'GapPrefere': 'GapPrefere', });
lyr_PreferredAreas_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Exit_': 'Exit_', 'Label': 'Label', 'Preference': 'Preference', 'Corridor': 'Corridor', 'CorridorTy': 'CorridorTy', 'Gap': 'Gap', 'GapText': 'GapText', 'City': 'City', 'County': 'County', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Utility': 'Utility', 'GapPrefere': 'GapPrefere', });
lyr_EGLELevel2ChargerNeeded_4.set('fieldAliases', {'fid': 'fid', 'AssignedNo': 'AssignedNo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ZipCode': 'ZipCode', 'City': 'City', 'Descriptio': 'Descriptio', 'ExistingCh': 'ExistingCh', 'TotalCharg': 'TotalCharg', 'TotalCha_1': 'TotalCha_1', 'RemainingC': 'RemainingC', 'ChargerTyp': 'ChargerTyp', 'GlobalID': 'GlobalID', });
lyr_EGLEDCFastChargersNeeded_5.set('fieldAliases', {'fid': 'fid', 'AssignedNo': 'AssignedNo', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ZipCode': 'ZipCode', 'City': 'City', 'Descriptio': 'Descriptio', 'ExistingCh': 'ExistingCh', 'TotalCharg': 'TotalCharg', 'TotalCha_1': 'TotalCha_1', 'RemainingC': 'RemainingC', 'ChargerTyp': 'ChargerTyp', 'GlobalID': 'GlobalID', });
lyr_MIDCPublicSites_6.set('fieldAliases', {'fid': 'fid', 'Fuel Type Code': 'Fuel Type Code', 'Station Name': 'Station Name', 'Street Address': 'Street Address', 'Intersection Directions': 'Intersection Directions', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'Plus4': 'Plus4', 'Station Phone': 'Station Phone', 'Status Code': 'Status Code', 'Expected Date': 'Expected Date', 'Groups With Access Code': 'Groups With Access Code', 'Access Days Time': 'Access Days Time', 'Cards Accepted': 'Cards Accepted', 'BD Blends': 'BD Blends', 'NG Fill Type Code': 'NG Fill Type Code', 'NG PSI': 'NG PSI', 'EV Level1 EVSE Num': 'EV Level1 EVSE Num', 'EV Level2 EVSE Num': 'EV Level2 EVSE Num', 'EV DC Fast Count': 'EV DC Fast Count', 'EV Other Info': 'EV Other Info', 'EV Network': 'EV Network', 'EV Network Web': 'EV Network Web', 'Geocode Status': 'Geocode Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date Last Confirmed': 'Date Last Confirmed', 'ID': 'ID', 'Updated At': 'Updated At', 'Owner Type Code': 'Owner Type Code', 'Federal Agency ID': 'Federal Agency ID', 'Federal Agency Name': 'Federal Agency Name', 'Open Date': 'Open Date', 'Hydrogen Status Link': 'Hydrogen Status Link', 'NG Vehicle Class': 'NG Vehicle Class', 'LPG Primary': 'LPG Primary', 'E85 Blender Pump': 'E85 Blender Pump', 'EV Connector Types': 'EV Connector Types', 'Country': 'Country', 'Intersection Directions (French)': 'Intersection Directions (French)', 'Access Days Time (French)': 'Access Days Time (French)', 'BD Blends (French)': 'BD Blends (French)', 'Groups With Access Code (French)': 'Groups With Access Code (French)', 'Hydrogen Is Retail': 'Hydrogen Is Retail', 'Access Code': 'Access Code', 'Access Detail Code': 'Access Detail Code', 'Federal Agency Code': 'Federal Agency Code', 'Facility Type': 'Facility Type', 'CNG Dispenser Num': 'CNG Dispenser Num', 'CNG On-Site Renewable Source': 'CNG On-Site Renewable Source', 'CNG Total Compression Capacity': 'CNG Total Compression Capacity', 'CNG Storage Capacity': 'CNG Storage Capacity', 'LNG On-Site Renewable Source': 'LNG On-Site Renewable Source', 'E85 Other Ethanol Blends': 'E85 Other Ethanol Blends', 'EV Pricing': 'EV Pricing', 'EV Pricing (French)': 'EV Pricing (French)', 'LPG Nozzle Types': 'LPG Nozzle Types', 'Hydrogen Pressures': 'Hydrogen Pressures', 'Hydrogen Standards': 'Hydrogen Standards', 'CNG Fill Type Code': 'CNG Fill Type Code', 'CNG PSI': 'CNG PSI', 'CNG Vehicle Class': 'CNG Vehicle Class', 'LNG Vehicle Class': 'LNG Vehicle Class', 'EV On-Site Renewable Source': 'EV On-Site Renewable Source', 'Restricted Access': 'Restricted Access', 'RD Blends': 'RD Blends', 'RD Blends (French)': 'RD Blends (French)', 'RD Blended with Biodiesel': 'RD Blended with Biodiesel', 'RD Maximum Biodiesel Level': 'RD Maximum Biodiesel Level', 'NPS Unit Name': 'NPS Unit Name', 'CNG Station Sells Renewable Natural Gas': 'CNG Station Sells Renewable Natural Gas', 'LNG Station Sells Renewable Natural Gas': 'LNG Station Sells Renewable Natural Gas', 'Maximum Vehicle Class': 'Maximum Vehicle Class', 'EV Workplace Charging': 'EV Workplace Charging', 'Funding Sources': 'Funding Sources', });
lyr_Round1Awarded_7.set('fieldAliases', {'fid': 'fid', 'F__of_Port': 'F__of_Port', 'Selected_P': 'Selected_P', 'Site_Addre': 'Site_Addre', 'GlobalID': 'GlobalID', 'constructi': 'constructi', 'NEVI_Round': 'NEVI_Round', });
lyr_Round2Awarded_8.set('fieldAliases', {'fid': 'fid', 'F__of_Port': 'F__of_Port', 'Selected_P': 'Selected_P', 'Site_Addre': 'Site_Addre', 'GlobalID': 'GlobalID', 'constructi': 'constructi', 'NEVI_Round': 'NEVI_Round', });
lyr_Phase1PriorityCounties_1.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_EligibleAreas_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Exit_': 'TextEdit', 'Label': 'TextEdit', 'Preference': 'TextEdit', 'Corridor': 'TextEdit', 'CorridorTy': 'TextEdit', 'Gap': 'Range', 'GapText': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Utility': 'TextEdit', 'GapPrefere': 'TextEdit', });
lyr_PreferredAreas_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Exit_': 'TextEdit', 'Label': 'TextEdit', 'Preference': 'TextEdit', 'Corridor': 'TextEdit', 'CorridorTy': 'TextEdit', 'Gap': 'Range', 'GapText': 'TextEdit', 'City': 'TextEdit', 'County': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Utility': 'TextEdit', 'GapPrefere': 'TextEdit', });
lyr_EGLELevel2ChargerNeeded_4.set('fieldImages', {'fid': 'TextEdit', 'AssignedNo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ZipCode': 'TextEdit', 'City': 'TextEdit', 'Descriptio': 'TextEdit', 'ExistingCh': 'TextEdit', 'TotalCharg': 'TextEdit', 'TotalCha_1': 'TextEdit', 'RemainingC': 'TextEdit', 'ChargerTyp': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_EGLEDCFastChargersNeeded_5.set('fieldImages', {'fid': 'TextEdit', 'AssignedNo': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ZipCode': 'TextEdit', 'City': 'TextEdit', 'Descriptio': 'TextEdit', 'ExistingCh': 'TextEdit', 'TotalCharg': 'TextEdit', 'TotalCha_1': 'TextEdit', 'RemainingC': 'TextEdit', 'ChargerTyp': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_MIDCPublicSites_6.set('fieldImages', {'fid': 'TextEdit', 'Fuel Type Code': 'TextEdit', 'Station Name': 'TextEdit', 'Street Address': 'TextEdit', 'Intersection Directions': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'Plus4': 'TextEdit', 'Station Phone': 'TextEdit', 'Status Code': 'TextEdit', 'Expected Date': 'TextEdit', 'Groups With Access Code': 'TextEdit', 'Access Days Time': 'TextEdit', 'Cards Accepted': 'TextEdit', 'BD Blends': 'TextEdit', 'NG Fill Type Code': 'TextEdit', 'NG PSI': 'TextEdit', 'EV Level1 EVSE Num': 'TextEdit', 'EV Level2 EVSE Num': 'Range', 'EV DC Fast Count': 'Range', 'EV Other Info': 'TextEdit', 'EV Network': 'TextEdit', 'EV Network Web': 'TextEdit', 'Geocode Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Date Last Confirmed': 'Range', 'ID': 'Range', 'Updated At': 'DateTime', 'Owner Type Code': 'TextEdit', 'Federal Agency ID': 'TextEdit', 'Federal Agency Name': 'TextEdit', 'Open Date': 'Range', 'Hydrogen Status Link': 'TextEdit', 'NG Vehicle Class': 'TextEdit', 'LPG Primary': 'TextEdit', 'E85 Blender Pump': 'TextEdit', 'EV Connector Types': 'TextEdit', 'Country': 'TextEdit', 'Intersection Directions (French)': 'TextEdit', 'Access Days Time (French)': 'TextEdit', 'BD Blends (French)': 'TextEdit', 'Groups With Access Code (French)': 'TextEdit', 'Hydrogen Is Retail': 'TextEdit', 'Access Code': 'TextEdit', 'Access Detail Code': 'TextEdit', 'Federal Agency Code': 'TextEdit', 'Facility Type': 'TextEdit', 'CNG Dispenser Num': 'TextEdit', 'CNG On-Site Renewable Source': 'TextEdit', 'CNG Total Compression Capacity': 'TextEdit', 'CNG Storage Capacity': 'TextEdit', 'LNG On-Site Renewable Source': 'TextEdit', 'E85 Other Ethanol Blends': 'TextEdit', 'EV Pricing': 'TextEdit', 'EV Pricing (French)': 'TextEdit', 'LPG Nozzle Types': 'TextEdit', 'Hydrogen Pressures': 'TextEdit', 'Hydrogen Standards': 'TextEdit', 'CNG Fill Type Code': 'TextEdit', 'CNG PSI': 'TextEdit', 'CNG Vehicle Class': 'TextEdit', 'LNG Vehicle Class': 'TextEdit', 'EV On-Site Renewable Source': 'TextEdit', 'Restricted Access': 'CheckBox', 'RD Blends': 'TextEdit', 'RD Blends (French)': 'TextEdit', 'RD Blended with Biodiesel': 'TextEdit', 'RD Maximum Biodiesel Level': 'TextEdit', 'NPS Unit Name': 'TextEdit', 'CNG Station Sells Renewable Natural Gas': 'TextEdit', 'LNG Station Sells Renewable Natural Gas': 'TextEdit', 'Maximum Vehicle Class': 'TextEdit', 'EV Workplace Charging': 'CheckBox', 'Funding Sources': 'TextEdit', });
lyr_Round1Awarded_7.set('fieldImages', {'fid': 'TextEdit', 'F__of_Port': 'TextEdit', 'Selected_P': 'TextEdit', 'Site_Addre': 'TextEdit', 'GlobalID': 'TextEdit', 'constructi': 'TextEdit', 'NEVI_Round': 'TextEdit', });
lyr_Round2Awarded_8.set('fieldImages', {'fid': 'TextEdit', 'F__of_Port': 'TextEdit', 'Selected_P': 'TextEdit', 'Site_Addre': 'TextEdit', 'GlobalID': 'TextEdit', 'constructi': 'TextEdit', 'NEVI_Round': 'TextEdit', });
lyr_Phase1PriorityCounties_1.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'inline label - visible with data', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_EligibleAreas_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Exit_': 'no label', 'Label': 'no label', 'Preference': 'no label', 'Corridor': 'no label', 'CorridorTy': 'no label', 'Gap': 'no label', 'GapText': 'no label', 'City': 'no label', 'County': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Utility': 'no label', 'GapPrefere': 'no label', });
lyr_PreferredAreas_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Exit_': 'no label', 'Label': 'no label', 'Preference': 'no label', 'Corridor': 'no label', 'CorridorTy': 'no label', 'Gap': 'no label', 'GapText': 'no label', 'City': 'no label', 'County': 'no label', 'GlobalID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Utility': 'no label', 'GapPrefere': 'no label', });
lyr_EGLELevel2ChargerNeeded_4.set('fieldLabels', {'fid': 'no label', 'AssignedNo': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ZipCode': 'no label', 'City': 'no label', 'Descriptio': 'no label', 'ExistingCh': 'no label', 'TotalCharg': 'no label', 'TotalCha_1': 'no label', 'RemainingC': 'no label', 'ChargerTyp': 'no label', 'GlobalID': 'no label', });
lyr_EGLEDCFastChargersNeeded_5.set('fieldLabels', {'fid': 'no label', 'AssignedNo': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ZipCode': 'no label', 'City': 'inline label - visible with data', 'Descriptio': 'no label', 'ExistingCh': 'no label', 'TotalCharg': 'no label', 'TotalCha_1': 'no label', 'RemainingC': 'no label', 'ChargerTyp': 'no label', 'GlobalID': 'no label', });
lyr_MIDCPublicSites_6.set('fieldLabels', {'fid': 'no label', 'Fuel Type Code': 'no label', 'Station Name': 'no label', 'Street Address': 'inline label - visible with data', 'Intersection Directions': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'Plus4': 'no label', 'Station Phone': 'no label', 'Status Code': 'no label', 'Expected Date': 'no label', 'Groups With Access Code': 'no label', 'Access Days Time': 'no label', 'Cards Accepted': 'no label', 'BD Blends': 'no label', 'NG Fill Type Code': 'no label', 'NG PSI': 'no label', 'EV Level1 EVSE Num': 'no label', 'EV Level2 EVSE Num': 'no label', 'EV DC Fast Count': 'no label', 'EV Other Info': 'no label', 'EV Network': 'no label', 'EV Network Web': 'no label', 'Geocode Status': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Date Last Confirmed': 'no label', 'ID': 'no label', 'Updated At': 'no label', 'Owner Type Code': 'no label', 'Federal Agency ID': 'no label', 'Federal Agency Name': 'no label', 'Open Date': 'no label', 'Hydrogen Status Link': 'no label', 'NG Vehicle Class': 'no label', 'LPG Primary': 'no label', 'E85 Blender Pump': 'no label', 'EV Connector Types': 'no label', 'Country': 'no label', 'Intersection Directions (French)': 'no label', 'Access Days Time (French)': 'no label', 'BD Blends (French)': 'no label', 'Groups With Access Code (French)': 'no label', 'Hydrogen Is Retail': 'no label', 'Access Code': 'no label', 'Access Detail Code': 'no label', 'Federal Agency Code': 'no label', 'Facility Type': 'no label', 'CNG Dispenser Num': 'no label', 'CNG On-Site Renewable Source': 'no label', 'CNG Total Compression Capacity': 'no label', 'CNG Storage Capacity': 'no label', 'LNG On-Site Renewable Source': 'no label', 'E85 Other Ethanol Blends': 'no label', 'EV Pricing': 'no label', 'EV Pricing (French)': 'no label', 'LPG Nozzle Types': 'no label', 'Hydrogen Pressures': 'no label', 'Hydrogen Standards': 'no label', 'CNG Fill Type Code': 'no label', 'CNG PSI': 'no label', 'CNG Vehicle Class': 'no label', 'LNG Vehicle Class': 'no label', 'EV On-Site Renewable Source': 'no label', 'Restricted Access': 'no label', 'RD Blends': 'no label', 'RD Blends (French)': 'no label', 'RD Blended with Biodiesel': 'no label', 'RD Maximum Biodiesel Level': 'no label', 'NPS Unit Name': 'no label', 'CNG Station Sells Renewable Natural Gas': 'no label', 'LNG Station Sells Renewable Natural Gas': 'no label', 'Maximum Vehicle Class': 'no label', 'EV Workplace Charging': 'no label', 'Funding Sources': 'no label', });
lyr_Round1Awarded_7.set('fieldLabels', {'fid': 'no label', 'F__of_Port': 'no label', 'Selected_P': 'no label', 'Site_Addre': 'no label', 'GlobalID': 'no label', 'constructi': 'no label', 'NEVI_Round': 'no label', });
lyr_Round2Awarded_8.set('fieldLabels', {'fid': 'no label', 'F__of_Port': 'no label', 'Selected_P': 'no label', 'Site_Addre': 'no label', 'GlobalID': 'no label', 'constructi': 'no label', 'NEVI_Round': 'no label', });
lyr_Round2Awarded_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});