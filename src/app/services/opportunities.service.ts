import { Injectable } from '@angular/core';

@Injectable()
export class OpportunitiesService {

  opportunities: any[] = [
        {
            "opportunityId": "5ba5c580-352a-11e9-913b-d10854b88ad4",
            "opportunityName": "dfsdfsfs_dangelov_2019.02.20",
            "opportunityDescription": "",
            "created": 1550679182785,
            "modified": 1550679182785,
            "status": "DRAFT",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "ed9fb040-30cb-11e8-9c1d-fbd8b33f275c",
                "firstName": "Deyan",
                "lastName": "Angelov",
                "fullName": "Deyan Angelov",
                "email": "dangelov@vmware.com"
            },
            "createdBy": {
                "id": "ed9fb040-30cb-11e8-9c1d-fbd8b33f275c",
                "firstName": "Deyan",
                "lastName": "Angelov",
                "fullName": "Deyan Angelov",
                "email": "dangelov@vmware.com"
            },
            "isReadOnly": true,
            "notes": null,
            "reviewers": [],
            "customerName": "dfsdfsfs",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": null,
            "deliveryCountryId": 35,
            "uniqueId": -1,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "5f734eb8-9212-4cf5-b325-c7973d3de806",
            "opportunityName": "asd_dgeorgi_2019.02.19",
            "opportunityDescription": "",
            "created": 1550572425964,
            "modified": 1550572490238,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "78b0249a-b039-44e2-befe-b582f5f2144a",
                "firstName": "Georgi",
                "lastName": "Dimitrov",
                "fullName": "Georgi Dimitrov",
                "email": "dgeorgi@vmware.com"
            },
            "createdBy": {
                "id": "78b0249a-b039-44e2-befe-b582f5f2144a",
                "firstName": "Georgi",
                "lastName": "Dimitrov",
                "fullName": "Georgi Dimitrov",
                "email": "dgeorgi@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "asd",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 11,
            "uniqueId": 12039,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "a791a060-3159-11e9-b0da-cd8be234c4d8",
            "opportunityName": "dsgd_turnerk_2019.02.15",
            "opportunityDescription": "",
            "created": 1550259679168,
            "modified": 1550259679168,
            "status": "DRAFT",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "createdBy": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "isReadOnly": true,
            "notes": null,
            "reviewers": [],
            "customerName": "dsgd",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": null,
            "deliveryCountryId": 244,
            "uniqueId": -1,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "bdfcc8cc-571a-4f50-b28c-b97efb65ede7",
            "opportunityName": "Test_turnerk_2019.02.15",
            "opportunityDescription": "This is the description",
            "created": 1550258692412,
            "modified": 1550258837136,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "createdBy": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "Test",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12038,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "db09432a-d8b1-4959-8634-175e0d2c2db5",
            "opportunityName": "test_rlo_2019.02.09",
            "opportunityDescription": "",
            "created": 1549740005436,
            "modified": 1549749428065,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "9f00955d-d505-4b42-94b4-c084e2d2c807",
                "firstName": "Reg",
                "lastName": "Lo",
                "fullName": "Reg Lo",
                "email": "rlo@vmware.com"
            },
            "createdBy": {
                "id": "9f00955d-d505-4b42-94b4-c084e2d2c807",
                "firstName": "Reg",
                "lastName": "Lo",
                "fullName": "Reg Lo",
                "email": "rlo@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "test",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12037,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "40767582-c2cf-494c-8fa8-e87e671a6c3b",
            "opportunityName": "TestingKingsley_turnerk_2019.02.05",
            "opportunityDescription": "",
            "created": 1549371352799,
            "modified": 1549371418615,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "createdBy": {
                "id": "b66155c6-1673-4987-960e-3d0cf7a78baa",
                "firstName": "Kingsley",
                "lastName": "Turner",
                "fullName": "Kingsley Turner",
                "email": "turnerk@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "Testing Kingsley",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12036,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "7e8ab4cc-bbcf-4a7f-b2c1-a7f7f5e9f690",
            "opportunityName": "HorizonDeployMSDeployforVDI_balul_2018.11.07",
            "opportunityDescription": "",
            "created": 1541584463423,
            "modified": 1541584819856,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "cb3f9461-58a2-4f46-88a2-e8ec70e1d5db",
                "firstName": "Lakshmi",
                "lastName": "Balu",
                "fullName": "Lakshmi Balu",
                "email": "balul@vmware.com"
            },
            "createdBy": {
                "id": "cb3f9461-58a2-4f46-88a2-e8ec70e1d5db",
                "firstName": "Lakshmi",
                "lastName": "Balu",
                "fullName": "Lakshmi Balu",
                "email": "balul@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "HorizonDeployMSDeploy for VDI",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12035,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "aa113cf6-ff83-46d4-921f-de664eb5d60d",
            "opportunityName": "DBS_DW_jasont_2018.11.07",
            "opportunityDescription": "",
            "created": 1541582407718,
            "modified": 1541583311061,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "createdBy": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "DBS",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 195,
            "uniqueId": 12033,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "f5a4a549-1ca5-4afb-8463-4b15c39b0f6f",
            "opportunityName": "AdvocateHealthCareNetwork_vvivek_2018.11.07",
            "opportunityDescription": "vSphere Upgrade",
            "created": 1541582217834,
            "modified": 1541582638998,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "1b5dca5a-e8c1-4d71-a9c7-018a05bbffc6",
                "firstName": "Venkat",
                "lastName": "Vivek",
                "fullName": "Venkat Vivek",
                "email": "vvivek@vmware.com"
            },
            "createdBy": {
                "id": "1b5dca5a-e8c1-4d71-a9c7-018a05bbffc6",
                "firstName": "Venkat",
                "lastName": "Vivek",
                "fullName": "Venkat Vivek",
                "email": "vvivek@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "Advocate Health Care Network",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "13057159",
            "deliveryCountryId": 244,
            "uniqueId": 12031,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "6e3eb55f-8292-48ee-9e26-4a37386fb8e0",
            "opportunityName": "VIO1_srnair_2018.11.07",
            "opportunityDescription": "",
            "created": 1541582020783,
            "modified": 1541582093838,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "createdBy": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "VIO-1",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": null,
            "deliveryCountryId": 195,
            "uniqueId": 12030,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "d2b8f915-c0a8-41ee-b764-e304b22e163d",
            "opportunityName": "DavidJJoseph_vvivek_2018.11.07",
            "opportunityDescription": "NSX+Micro-seg D&D+vRNI Deploy",
            "created": 1541579674833,
            "modified": 1541580880768,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "1b5dca5a-e8c1-4d71-a9c7-018a05bbffc6",
                "firstName": "Venkat",
                "lastName": "Vivek",
                "fullName": "Venkat Vivek",
                "email": "vvivek@vmware.com"
            },
            "createdBy": {
                "id": "1b5dca5a-e8c1-4d71-a9c7-018a05bbffc6",
                "firstName": "Venkat",
                "lastName": "Vivek",
                "fullName": "Venkat Vivek",
                "email": "vvivek@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "The David J. Joseph Company",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "13057001",
            "deliveryCountryId": 244,
            "uniqueId": 12026,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "88f0a65b-7ab6-4aa3-ae1d-09861484de5c",
            "opportunityName": "NFV_srnair_2018.11.07",
            "opportunityDescription": "",
            "created": 1541578954486,
            "modified": 1541579283503,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "createdBy": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "NFV",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": null,
            "deliveryCountryId": 195,
            "uniqueId": 12025,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "b398b00c-e3f7-49b6-b7ff-002c9e0f136d",
            "opportunityName": "VIO",
            "opportunityDescription": "",
            "created": 1541578714509,
            "modified": 1541582009369,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "createdBy": {
                "id": "55d1657e-e3c6-4859-be43-57328bb62542",
                "firstName": "Sreekumar",
                "lastName": "Nair",
                "fullName": "Sreekumar Nair",
                "email": "srnair@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "VIO",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 195,
            "uniqueId": 12024,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "d8669c9d-cb1c-43fc-97f8-4c7e72b44cd9",
            "opportunityName": "Migration_jasont_2018.11.07",
            "opportunityDescription": "",
            "created": 1541576742265,
            "modified": 1541577948023,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "createdBy": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "Migration",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 195,
            "uniqueId": 12022,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "8f959125-0927-4a5b-921e-9415d442d24a",
            "opportunityName": "BRI_jasont_2018.11.07",
            "opportunityDescription": "",
            "created": 1541575288301,
            "modified": 1541576027834,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "createdBy": {
                "id": "9e7becad-cf1f-4fe4-94de-245fe8adcbed",
                "firstName": "Jason",
                "lastName": "Tan",
                "fullName": "Jason Tan",
                "email": "jasont@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "BRI",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 195,
            "uniqueId": 12018,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "db9c439f-789f-44b3-8527-57327a26e808",
            "opportunityName": "test_sissar_2018.11.07",
            "opportunityDescription": "",
            "created": 1541575250625,
            "modified": 1541577039491,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "56cf2379-d5d0-4896-af24-4c924b155de9",
                "firstName": "Saurav",
                "lastName": "Issar",
                "fullName": "Saurav Issar",
                "email": "sissar@vmware.com"
            },
            "createdBy": {
                "id": "56cf2379-d5d0-4896-af24-4c924b155de9",
                "firstName": "Saurav",
                "lastName": "Issar",
                "fullName": "Saurav Issar",
                "email": "sissar@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "test",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": null,
            "deliveryCountryId": 242,
            "uniqueId": 12019,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "e5549bba-8054-4a19-a959-d590e9500843",
            "opportunityName": "SVBDR_mdelatorre_2018.11.06",
            "opportunityDescription": "",
            "created": 1541574362158,
            "modified": 1541574798119,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "7a0e5200-26e3-11e7-8a02-c769e7f59280",
                "firstName": "Michael",
                "lastName": "de la Torre",
                "fullName": "Michael de la Torre",
                "email": "mdelatorre@vmware.com"
            },
            "createdBy": {
                "id": "7a0e5200-26e3-11e7-8a02-c769e7f59280",
                "firstName": "Michael",
                "lastName": "de la Torre",
                "fullName": "Michael de la Torre",
                "email": "mdelatorre@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "SVB DR",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12017,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "a6b6d4f4-610c-4902-b1b7-b3aa0f1ea821",
            "opportunityName": "JohnMuirHealthNSX_msandeep_2018.11.07",
            "opportunityDescription": "",
            "created": 1541573799743,
            "modified": 1541574676257,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "e6917a36-8ceb-446b-ad79-768d9a22d428",
                "firstName": "Sandeep",
                "lastName": "M",
                "fullName": "Sandeep M",
                "email": "msandeep@vmware.com"
            },
            "createdBy": {
                "id": "e6917a36-8ceb-446b-ad79-768d9a22d428",
                "firstName": "Sandeep",
                "lastName": "M",
                "fullName": "Sandeep M",
                "email": "msandeep@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "John Muir Health NSX",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 244,
            "uniqueId": 12016,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "f70b1c8b-a7ea-4ffe-91e0-4d584c9d27f2",
            "opportunityName": "UniklinikumEssen_Workspace ONE basics",
            "opportunityDescription": "",
            "created": 1541570913904,
            "modified": 1541573204740,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "11d94450-0fdd-11e7-88fc-97f87f0de9e5",
                "firstName": "Rafael",
                "lastName": "Hartmann",
                "fullName": "Rafael Hartmann",
                "email": "rhartmann@vmware.com"
            },
            "createdBy": {
                "id": "11d94450-0fdd-11e7-88fc-97f87f0de9e5",
                "firstName": "Rafael",
                "lastName": "Hartmann",
                "fullName": "Rafael Hartmann",
                "email": "rhartmann@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "Uniklinikum Essen",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "",
            "deliveryCountryId": 87,
            "uniqueId": 12012,
            "changepointIds": null,
            "hasSkus": false
        },
        {
            "opportunityId": "4fba3c92-65b9-4aa5-a650-22e05c46b245",
            "opportunityName": "R1058",
            "opportunityDescription": "",
            "created": 1541568013802,
            "modified": 1541569517210,
            "status": "OPENED",
            "hasDecommissionedServices": false,
            "hasRetractedService": false,
            "user": {
                "id": "bf491f55-a8f7-4d5f-b79a-1b5f7521ab95",
                "firstName": "Einstein",
                "lastName": "C R Wilson",
                "fullName": "Einstein C R Wilson",
                "email": "ecrwilson@vmware.com"
            },
            "createdBy": {
                "id": "bf491f55-a8f7-4d5f-b79a-1b5f7521ab95",
                "firstName": "Einstein",
                "lastName": "C R Wilson",
                "fullName": "Einstein C R Wilson",
                "email": "ecrwilson@vmware.com"
            },
            "isReadOnly": false,
            "notes": null,
            "reviewers": [],
            "customerName": "UTC use this one",
            "hasDeletePermission": true,
            "hasSharePermission": true,
            "canDownloadBom": true,
            "canDownloadProposal": true,
            "vmStarOpportunityId": "11610993",
            "deliveryCountryId": 244,
            "uniqueId": 12011,
            "changepointIds": null,
            "hasSkus": false
        }
  ];

  pricings: any[] = [
      {
        opportunityName: '',
        opportunityId: '',
        expanded: true,
        pricings: [
          { "type": "SOW",
            "id": "9f412bc0-255f-11e9-a660-f9b9f18f13a0",
            "pricingName": "EMEA_John_Smith_01-Feb-2019",
            "engagementId": "",
            "customerName": "John Smith",
            "projectName": "project",
            "servicesSalesRep": "rep",
            "salesCountry": {
                "id": 12,
                "code": "AM",
                "name": "Armenia",
                "currency": {
                    "code": "USD",
                    "name": "United States Dollar",
                    "symbol": "$",
                    "id": 2
                },
                "region": {
                    "code": "EMEA",
                    "name": "Europe/Middle East and Africa",
                    "id": 1
                },
                "subRegionName": "CEMEA",
                "workdayDuration": 8
            },
            "dealType": "FIXED_FEE",
            "revision": 0,
            "status": "DRAFT",
            "created": 1548942828657,
            "createdByFullName": "Fyodor Skorozhenko" },
          { "type": "PCR",
            "id": "c4b80d60-1254-11e9-8a8d-1fa531e008d9",
            "pricingName": "EMEA_fgdgdf_07-Jan-2019",
            "engagementId": "gdf",
            "customerName": "fgdgdf",
            "projectName": "fhghf",
            "servicesSalesRep": "hfghfg",
            "salesCountry": {
                "id": 7,
                "code": "AO",
                "name": "Angola",
                "currency": {
                    "code": "USD",
                    "name": "United States Dollar",
                    "symbol": "$",
                    "id": 2
                },
                "region": {
                    "code": "EMEA",
                    "name": "Europe/Middle East and Africa",
                    "id": 1
                },
                "subRegionName": "SEMEA",
                "workdayDuration": 8
            },
            "dealType": null,
            "revision": 0,
            "status": "DRAFT",
            "created": 1546850317744,
            "createdByFullName": "Hristo Klisurov" },
          { "type": "WO",
            "id": "cf6b9f00-2493-11e9-a4b1-230840fe9f25",
            "pricingName": "EMEA_ffds_30-Jan-2019",
            "customerName": "ffds",
            "projectName": "",
            "servicesSalesRep": "",
            "salesCountry": {
                "id": 28,
                "code": "BA",
                "name": "Bosnia and Herzegovina",
                "currency": {
                    "code": "EUR",
                    "name": "Euro",
                    "symbol": "€",
                    "id": 1
                },
                "region": {
                    "code": "EMEA",
                    "name": "Europe/Middle East and Africa",
                    "id": 1
                },
                "subRegionName": "CEMEA",
                "workdayDuration": 8
            },
            "dealType": null,
            "revision": 0,
            "status": "DRAFT",
            "created": 1548855298704,
            "createdByFullName": "Hristo Klisurov" }
        ]
      },
      { opportunityName: 'Opportunity 1',
        opportunityId: 'opp1',
        expanded: true,
        pricings: [
          { "type": "SOW",
              "id": "9c9386e0-294f-11e9-af61-d7df84e3df29",
              "pricingName": "EMEA_Yamaha_05-Feb-2019",
              
              "customerName": "Yamaha",
              "projectName": "",
              "servicesSalesRep": "",
              "salesCountry": {
                  "id": 35,
                  "code": "BG",
                  "name": "Bulgaria",
                  "currency": {
                      "code": "EUR",
                      "name": "Euro",
                      "symbol": "€",
                      "id": 1
                  },
                  "region": {
                      "code": "EMEA",
                      "name": "Europe/Middle East and Africa",
                      "id": 1
                  },
                  "subRegionName": "CEMEA",
                  "workdayDuration": 8
              },
              "dealType": "FIXED_FEE",
              "revision": 0,
              "status": "DRAFT",
              "created": 1549375744554,
               "createdByFullName": "Deyan Angelov" },
          { "type": "PCR",
              "id": "1c414df0-2874-11e9-b2dd-cd380071e990",
              "pricingName": "EMEA_hhhi_04-Feb-2019",
              "customerName": "hhhi",
              "projectName": "",
              "servicesSalesRep": "",
              "salesCountry": {
                  "id": 16,
                  "code": "AT",
                  "name": "Austria",
                  "currency": {
                      "code": "EUR",
                      "name": "Euro",
                      "symbol": "€",
                      "id": 1
                  },
                  "region": {
                      "code": "EMEA",
                      "name": "Europe/Middle East and Africa",
                      "id": 1
                  },
                  "subRegionName": "CEMEA",
                  "workdayDuration": 8
              },
              "dealType": "FIXED_FEE",
              "revision": 1,
              "status": "SUBMITTED",
              "created": 1549281453085,
              "createdByFullName": "Hristo Klisurov" },
          { "type": "WO",
              "id": "f48e6950-2625-11e9-9261-6b6e2c0ee509",
              "pricingName": "EMEA_twtert_01-Feb-2019",
              "customerName": "twtert",
              "projectName": "wer",
              "servicesSalesRep": "wer",
              "salesCountry": {
                  "id": 16,
                  "code": "AT",
                  "name": "Austria",
                  "currency": {
                      "code": "EUR",
                      "name": "Euro",
                      "symbol": "€",
                      "id": 1
                  },
                  "region": {
                      "code": "EMEA",
                      "name": "Europe/Middle East and Africa",
                      "id": 1
                  },
                  "subRegionName": "CEMEA",
                  "workdayDuration": 8
              },
              "dealType": "FIXED_FEE",
              "revision": 0,
              "status": "DRAFT",
              "created": 1549027980508,
              "createdByFullName": "Ivan Stoilov" }
        ] },
      { opportunityName: 'Opportunity 2',
        opportunityId: 'opp2',
        expanded: true,
        pricings: [
          { "type": "SOW",
              "id": "0fae3840-294c-11e9-9571-d781dfd7ff66",
              "pricingName": "EMEA_fdsfs_sfd_05-Feb-2019",
              "customerName": "fdsfs sfd",
              "projectName": "fsdsd",
              "servicesSalesRep": "fsdfs",
              "salesCountry": {
                  "id": 12,
                  "code": "AM",
                  "name": "Armenia",
                  "currency": {
                      "code": "USD",
                      "name": "United States Dollar",
                      "symbol": "$",
                      "id": 2
                  },
                  "region": {
                      "code": "EMEA",
                      "name": "Europe/Middle East and Africa",
                      "id": 1
                  },
                  "subRegionName": "CEMEA",
                  "workdayDuration": 8
              },
              "dealType": "FIXED_FEE",
              "revision": 0,
              "status": "DRAFT",
              "created": 1549374351662,
              "createdByFullName": "Fyodor Skorozhenko" }, 
          { "type": "PCR",
              "id": "ae571df0-2496-11e9-b643-bd33c778484f",
              "pricingName": "EMEA_b_c_31-Jan-2019",
              "engagementId": "",
              "customerName": "b c",
              "projectName": "",
              "servicesSalesRep": "",
              "salesCountry": {
                  "id": 12,
                  "code": "AM",
                  "name": "Armenia",
                  "currency": {
                      "code": "USD",
                      "name": "United States Dollar",
                      "symbol": "$",
                      "id": 2
                  },
                  "region": {
                      "code": "EMEA",
                      "name": "Europe/Middle East and Africa",
                      "id": 1
                  },
                  "subRegionName": "CEMEA",
                  "workdayDuration": 8
              },
              "dealType": null,
              "revision": 0,
              "status": "DRAFT",
              "created": 1548856497911,
              "createdByFullName": "Hristo Klisurov" }
        ] }




  ];

  questions: any[] = [
    {
        "userId": "a3b5f500-65b8-4dbe-b43b-af467481b6c6",
        "fullName": "Is Virtual Infrastructure part of your customer's Outcome-Focused Roadmap?",
        "email": "cdanduono@vmware.com",
        "roles": [
          {
              "userRole": "ROLE_SERVICES_SALES"
          }
        ]
    }
  ];

  answers: any[] = [
    {
        "userId": "a3b5f500-65b8-4dbe-b43b-af467481b6c6",
        "fullName": "Yes",
        "email": "cdanduono@vmware.com",
        "roles": [
          {
              "userRole": "ROLE_SERVICES_SALES"
          }
        ]
    },
    {
        "userId": "a3b5f500-65b8-4dbe-b43b-af467481b6c6",
        "fullName": "No",
        "email": "cdanduono@vmware.com",
        "roles": [
          {
              "userRole": "ROLE_SERVICES_SALES"
          }
        ]
    }
  ];


  users: any[] = [
    {
        "userId": "a3b5f500-65b8-4dbe-b43b-af467481b6c6",
        "fullName": "Claudio DAnduono",
        "email": "cdanduono@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "7041e869-1eef-4183-a558-d490ad233310",
        "fullName": "Krzysztof Kiszycki",
        "email": "kkiszycki@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "e6917a36-8ceb-446b-ad79-768d9a22d428",
        "fullName": "Sandeep M",
        "email": "msandeep@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "94f10d77-f3ba-4768-bb23-d057c5e16fe2",
        "fullName": "Chris Janoch",
        "email": "cjanoch@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_CONSULTANT"
            }
        ]
    },
    {
        "userId": "d87980e3-855d-4975-b73d-3f4cdcd6c7ae",
        "fullName": "Renee Humphrey",
        "email": "rhumphrey@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_CONSULTANT"
            }
        ]
    },
    {
        "userId": "9e91eef9-5890-434b-b509-c6f1a21c46d2",
        "fullName": "Nadene Farage",
        "email": "nfarage@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "b0e0ae9d-cc72-4a14-a408-358abd053e50",
        "fullName": "Jo Meaneaux",
        "email": "jmeaneaux@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "d5383a1e-ff4d-41f5-abfe-3808a068a007",
        "fullName": "Graham Coutts",
        "email": "gcoutts@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "a3529735-1d8a-4730-a23b-bb527058fb25",
        "fullName": "Richard Claypole",
        "email": "rclaypole@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_CONSULTANT"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "78e0d79f-d97a-472b-915a-a68ae71f7b24",
        "fullName": "Philippe van der Voort",
        "email": "pvandervoort@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "eae66600-54f8-11e7-b522-db38609a0594",
        "fullName": "Simon Evans",
        "email": "evanssimon@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "34963d4e-e789-4efb-b032-df461819f657",
        "fullName": "Jose Moto Fernandez",
        "email": "jmotofernand@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "2a452095-6c04-46b6-b686-5128791153e2",
        "fullName": "Lars Hertha",
        "email": "lhertha@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "5d5c44e0-9d77-49d8-bab1-bab320f9eddc",
        "fullName": "Simon Ward",
        "email": "simonward@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "d3e776dd-1e83-44ea-85c1-483bc6693638",
        "fullName": "Marco Kiernan",
        "email": "kiernanm@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            }
        ]
    },
    {
        "userId": "df89196a-d9d3-4172-bc72-b4f6a6efe543",
        "fullName": "Emily Granacher",
        "email": "egranacher@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_PROJECT_MANAGER"
            }
        ]
    },
    {
        "userId": "e4807fa5-9b26-48ad-a001-a6c502fab434",
        "fullName": "David Gress",
        "email": "gressd@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_CONSULTANT"
            }
        ]
    },
    {
        "userId": "3b6060c3-0eec-48fb-8ab0-f638b5b0fe6e",
        "fullName": "Sam Wilson",
        "email": "samwilson@vmware.com",
        "roles": [
            {
                "userRole": "ROLE_SERVICES_SALES"
            },
            {
                "userRole": "ROLE_CONSULTANT"
            }
        ]
    }
  ];

  customerStories: any[] = [
        {
            "id": "2e61f325-e1da-11e8-9b78-5215f5e37536",
            "title": "Pfizer Project Rejuvenate (Replatform / DevOps)",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Pfizer, Inc",
            "created": 1540587760000
        },
        {
            "id": "2e61f2bb-e1da-11e8-9b78-5215f5e37536",
            "title": "Pennsylvania Department of Transportation-Commonwealth of Pennsylvania_VSphere",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Pennsylvania Department of Transportation - Commonwealth of Pennsylvania",
            "created": 1539274149000
        },
        {
            "id": "2e61f241-e1da-11e8-9b78-5215f5e37536",
            "title": "WorkSpace One Design and Deploy - Shearman",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Shearman and Sterling",
            "created": 1538747700000
        },
        {
            "id": "2e61f1b2-e1da-11e8-9b78-5215f5e37536",
            "title": "Loves Travel Stops vSphere",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Love's Travel Stops",
            "created": 1538487566000
        },
        {
            "id": "2e61f13f-e1da-11e8-9b78-5215f5e37536",
            "title": "Costco vRealize",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Costco",
            "created": 1538487177000
        },
        {
            "id": "2e61f0d1-e1da-11e8-9b78-5215f5e37536",
            "title": "Jamestown Properties NSX",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Jamestown Properties",
            "created": 1538486719000
        },
        {
            "id": "2e61f05e-e1da-11e8-9b78-5215f5e37536",
            "title": "Sysco Corporation Sysco DC Migration",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Sysco Corporation",
            "created": 1538485816000
        },
        {
            "id": "2e61eff2-e1da-11e8-9b78-5215f5e37536",
            "title": "Wells Fargo vRealize Automation Pilot",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Wells Fargo, N.A.",
            "created": 1538064702000
        },
        {
            "id": "2e61ef83-e1da-11e8-9b78-5215f5e37536",
            "title": "SSM Health Care vSphere (HC-Central)",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "SSM Health Care Corporation dba SSM Health",
            "created": 1537976142000
        },
        {
            "id": "2e61ef11-e1da-11e8-9b78-5215f5e37536",
            "title": "Henry Ford Health Systems End User Computing Deploy",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Henry Ford Health Systems",
            "created": 1537915846000
        },
        {
            "id": "2e61eea4-e1da-11e8-9b78-5215f5e37536",
            "title": "JP Morgan Chase - Digital Mobile Branch",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "JP Morgan Chase",
            "created": 1537877607000
        },
        {
            "id": "2e61ee30-e1da-11e8-9b78-5215f5e37536",
            "title": "JPMC vCloud Foundations Phase II JPMChase",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "JP Morgan CHase",
            "created": 1537870952000
        },
        {
            "id": "2e61edc2-e1da-11e8-9b78-5215f5e37536",
            "title": "NSX-vRNI Deploy, Micro-Segmentation and Security D&amp;D and ATS Optimize Rolls &amp; Skills",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "First National Bank",
            "created": 1537727531000
        },
        {
            "id": "2e61ed4c-e1da-11e8-9b78-5215f5e37536",
            "title": "Blue Cross Blue Shield of Kansas - Cloud Automation Design and Deploy IaaS Service",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Blue Cross Blue Shield of Kansas",
            "created": 1537555313000
        },
        {
            "id": "2e61ecdc-e1da-11e8-9b78-5215f5e37536",
            "title": "RBC vSphere Architecture Design Review",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Royal Bank of Canada",
            "created": 1537537694000
        },
        {
            "id": "2e61ec66-e1da-11e8-9b78-5215f5e37536",
            "title": "Nike Airwatch",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Nike",
            "created": 1537531680000
        },
        {
            "id": "2e61ebef-e1da-11e8-9b78-5215f5e37536",
            "title": "SecureWorks MDM Project",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "SecureWorks ",
            "created": 1537440241000
        },
        {
            "id": "2e61eb7d-e1da-11e8-9b78-5215f5e37536",
            "title": "Florida Division of Emergency Management Horizon 7 Upgrade and NSX Micro Segmentation  Deploy",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Florida Division of Emergency Management",
            "created": 1537352035000
        },
        {
            "id": "2e61eb10-e1da-11e8-9b78-5215f5e37536",
            "title": "Dell vROPS Design and Deploy",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "Dell EMC ",
            "created": 1537212776000
        },
        {
            "id": "2e61ea9f-e1da-11e8-9b78-5215f5e37536",
            "title": "West Virginia University NIST-Compliance (SLED-NORTH CENTRAL)",
            "status": "PUBLISHED",
            "opportunity": null,
            "customerName": "West Virginia University",
            "created": 1537202361000
        }
  ];

  public getOpportunities(): any[] {
    return this.opportunities;
  }

  public getPricings(): any[] {
    return this.pricings;
  }

  public getCustomerStories(): any[] {
    return this.customerStories;
  }

  public getUsers(): any[] {
    return this.users;
  }

  public getQuestions(): any[] {
    return this.questions;
  }

  public getAnswers(): any[] {
    return this.answers;
  }
  
  
  

  constructor() { }

}