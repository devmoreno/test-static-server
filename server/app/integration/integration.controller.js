/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/integration              ->  index
 */

'use strict';

var controller = {

    index: function (req, res) {

        res.json({
            "type": "AlertResourceCollectionV2",
            "alertSeverityCounts": null,
            "members": [{
                    "type": "AlertResourceV2",
                    "severity": "Critical",
                    "alertState": "Active",
                    "resourceUri": "/rest/appliance/1",
                    "associatedResource": {
                        "resourceName": "app1",
                        "resourceUri": "/rest/appliance/1",
                        "resourceCategory": "appliance",
                        "associationType": "HAS_A"
                    },
                    "physicalResourceType": "appliance",
                    "assignedToUser": null,
                    "clearedByUser": null,
                    "alertTypeID": "Trap.cpqHe4FltTolPowerSupplyFailed",
                    "clearedTime": null,
                    "changeLog": [],
                    "activityUri": null,
                    "lifeCycle": false,
                    "correctiveAction": null,
                    "resourceID": null,
                    "created": "2014-03-27T21:59:12.109Z",
                    "eTag": "2014-03-27T21:59:12.109Z",
                    "modified": "2014-03-27T21:59:12.109Z",
                    "healthCategory": "POWER",
                    "urgency": "None",
                    "associatedEventUris": [
                        "/rest/events/55"
                    ],
                    "category": "alerts",
                    "description": "event 1",
                    "uri": "/rest/alerts/5"
                },
                {
                    "type": "AlertResourceV2",
                    "severity": "Warning",
                    "alertState": "Active",
                    "resourceUri": "/rest/appliance/1",
                    "associatedResource": {
                        "resourceName": "app1",
                        "resourceUri": "/rest/appliance/1",
                        "resourceCategory": "appliance",
                        "associationType": "HAS_A"
                    },
                    "physicalResourceType": "appliance",
                    "assignedToUser": null,
                    "clearedByUser": null,
                    "alertTypeID": "Trap.cpqHe4FltTolPowerSupplyFailed",
                    "clearedTime": null,
                    "changeLog": [],
                    "activityUri": null,
                    "lifeCycle": false,
                    "correctiveAction": null,
                    "resourceID": null,
                    "created": "2014-03-25T20:07:03.500Z",
                    "eTag": "2014-03-25T20:07:03.500Z",
                    "modified": "2014-03-25T20:07:03.500Z",
                    "healthCategory": "POWER",
                    "urgency": "None",
                    "associatedEventUris": [
                        "/rest/events/38"
                    ],
                    "category": "alerts",
                    "description": "event 1",
                    "uri": "/rest/alerts/4"
                }
            ],
            "start": -1,
            "prevPageUri": null,
            "nextPageUri": null,
            "count": 2,
            "total": 2,
            "created": "2014-03-27T23:07:30.874Z",
            "eTag": null,
            "modified": "2014-03-27T23:07:30.874Z",
            "category": "alerts",
            "uri": "/rest/alerts?start=-1&count=2&sort=created:descending&filter=\"alertTypeID EQ 'Trap.cpqHe4FltTolPowerSupplyFailed'\"&filter=\"healthCategory EQ 'POWER'\""
        }).status(200);

    },

    create: function (req, res) {


    }

};

module.exports = controller;