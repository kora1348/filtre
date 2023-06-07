import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

   PLN_PLC = [
      {
        PLACECODE: 26,
        PLACELABEL: "Fundsettle",
        PLN_SVM: [
          {
            SVM: 16111801,
            ISIN: "LU0100749679",
            LABEL: "NEKR FD LIFESTYLE DYNAMICC",
            PLN: [
              {
                CODE: "NEKR01",
                PLAN: 8,
                CANAL: "*",
                AV: "A",
                LIB: "Fonds NEKRenta 8",
                DATEV_EFFECTIVE: "0001-01-01",
                PLAGE: [
                  {
                    BORNE: 9999999999999.99,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 1,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 1,
                    FRAIS_ETRANGERS: 2.00,
                    MIN_FRAIS_ETR: 0.00
                  },
                  {
                    BORNE: 0.00,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 0,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 0,
                    FRAIS_ETRANGERS: 0.00,
                    MIN_FRAIS_ETR: 0.00
                  },
                  {
                    BORNE: 0.00,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 0,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 0,
                    FRAIS_ETRANGERS: 0.00,
                    MIN_FRAIS_ETR: 0.00
                  },
                  {
                    BORNE: 0.00,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 0,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 0,
                    FRAIS_ETRANGERS: 0.00,
                    MIN_FRAIS_ETR: 0.00
                  },
                  {
                    BORNE: 0.00,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 0,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 0,
                    FRAIS_ETRANGERS: 0.00,
                    MIN_FRAIS_ETR: 0.00
                  }
                ]
              },
            
            ]
          },
         
         {
            SVM:37906990,
            ISIN:"FR0010149302",
            LABEL:"CARMIGNAC EMERGENT SC",
            PLN:[
               {
                  CODE:"NEKR01",
                  PLAN:8,
                  CANAL:"*",
                  AV:"A",
                  LIB:"Fonds NEKRenta 8",
                  DATEV_EFFECTIVE:"0001-01-01",
                  PLAGE:[
                     {
                        BORNE:9999999999999.99,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:1,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:1,
                        FRAIS_ETRANGERS:2.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     },
                     {
                        BORNE:0.00,
                        FRAIS_BORDEREAU:0.00,
                        FRAIS_RETRAIT:0.00,
                        TYPE_COURTAGE:0,
                        COURTAGE:0.00,
                        MIN_COURTAGE:0.00,
                        TYPE_FRAIS_ETR:0,
                        FRAIS_ETRANGERS:0.00,
                        MIN_FRAIS_ETR:0.00
                     }
                  ]
               },
               
            ]
         },
         {
          SVM:135045622,
          ISIN:"FR0010149120",
          LABEL:"CARMIGNAC SECURITE C",
          PLN:[
             {
                CODE:"NEKR01",
                PLAN:4,
                CANAL:"*",
                AV:"A",
                LIB:"Fonds NEKRenta 4",
                DATEV_EFFECTIVE:"0001-01-01",
                PLAGE:[
                   {
                      BORNE:9999999999999.99,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:1,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:1,
                      FRAIS_ETRANGERS:1.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   }
                ]
             },
             {
                CODE:"NEKR01",
                PLAN:4,
                CANAL:"*",
                AV:"V",
                LIB:"Fonds NEKRenta 4",
                DATEV_EFFECTIVE:"0001-01-01",
                PLAGE:[
                   {
                      BORNE:9999999999999.99,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:1,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:1,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   },
                   {
                      BORNE:0.00,
                      FRAIS_BORDEREAU:0.00,
                      FRAIS_RETRAIT:0.00,
                      TYPE_COURTAGE:0,
                      COURTAGE:0.00,
                      MIN_COURTAGE:0.00,
                      TYPE_FRAIS_ETR:0,
                      FRAIS_ETRANGERS:0.00,
                      MIN_FRAIS_ETR:0.00
                   }
                ]
             }
          ]
       },
         
        ]
      },
      {
        PLACECODE: 1,
        PLACELABEL: "Euronext Brussels",
        PLN_SVM: [
          {
            SVM: 836129993,
            ISIN: "BE0974314461",
            LABEL: "BALTA GROUP",
            PLN: [
              {
                CODE: "NEKR01",
                PLAN: 1,
                CANAL: "*",
                AV: "A",
                LIB: "Fonds NEKRenta 1",
                DATEV_EFFECTIVE: "0001-01-01",
                PLAGE: [
                  {
                    BORNE: 9999999999999.99,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 1,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 1,
                    FRAIS_ETRANGERS: 0.25,
                    MIN_FRAIS_ETR: 0.00
                  }
                ]
              },
              {
                CODE: "NEKR01",
                PLAN: 1,
                CANAL: "*",
                AV: "V",
                LIB: "Fonds NEKRenta 1",
                DATEV_EFFECTIVE: "0001-01-01",
                PLAGE: [
                  {
                    BORNE: 9999999999999.99,
                    FRAIS_BORDEREAU: 0.00,
                    FRAIS_RETRAIT: 0.00,
                    TYPE_COURTAGE: 1,
                    COURTAGE: 0.00,
                    MIN_COURTAGE: 0.00,
                    TYPE_FRAIS_ETR: 1,
                    FRAIS_ETRANGERS: 0.00,
                    MIN_FRAIS_ETR: 0.00
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

  constructor() {}
  
}
