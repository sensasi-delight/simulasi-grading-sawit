const categories = [
    {
        "id": 1,
        "code": "BM",
        "name": "Buah Mentah",
        "unit": "Janjang",
        "rules": [
            {
                "operation": "subtraction",
                "limit": {
                    "type": "max",
                    "value": 0
                },
                "operand": 0.5,
                "description": "kelebihan dari limit.value akan dikenakan potongan 50%"
            }
        ]
    },
    {
        "id": 2,
        "code": "BLM",
        "name": "Buah Lewat Matang",
        "unit": "Janjang",
        "rules": [
            {
                "operation": "subtraction",
                "limit": {
                    "type": "max",
                    "value": 0.05
                },
                "operand": 0.25,
                "description": "kelebihan dari limit.value akan dikenakan potongan 25%"
            }
        ]
    },
    // {
    // 	"id": 3,
    // 	"code": "TBK",
    // 	"name": "Tandan Buah Kosong",
    // 	"unit": "Janjang",
    // 	"rules": [
    // 		{
    // 			"operation": "subtraction",
    // 			"limit": {
    // 				"type": "max",
    // 				"value": 0
    // 			},
    // 			"operand": 1,
    // 			"description": "dipotong semua (100%)"
    // 		}
    // 	]
    // },
    {
        "id": 4,
        "code": "BMTG",
        "name": "Buah Matang",
        "unit": "Janjang",
        "rules": []
    },
    {
        "id": 5,
        "code": "BGP",
        "name": "Buah Ganggang Panjang",
        "unit": "Janjang",
        "rules": [
            {
                "operation": "subtraction",
                "limit": {
                    "type": "max",
                    "value": 0
                },
                "operand": 0.01,
                "description": "kelebihan dari limit.value akan dikenakan potongan 1%"
            }
        ]
    },
    // {
    // 	"id": 6,
    // 	"code": "JK",
    // 	"name": "Janjang Kecil (< 3kg)",
    // 	"unit": "Janjang",
    // 	"rules": [
    // 		{
    // 			"operation": "subtraction",
    // 			"limit": {
    // 				"type": "max",
    // 				"value": 0
    // 			},
    // 			"operand": 1,
    // 			"description": "dipotong semua (100%)"
    // 		}
    // 	]
    // },
    {
        "id": 7,
        "code": "BR",
        "name": "Buah Matang Menginap > 48 jam",
        "description": "jika mencapai  > 5% misal 8% maka yang kena potongan hanya yang 3%",
        "unit": "Janjang",
        "rules": [
            {
                "operation": "subtraction",
                "limit": {
                    "type": "max",
                    "value": 0.05
                },
                "operand": 0.5,
                "description": "kelebihan dari limit.value akan dikenakan potongan 50%"
            }
        ]
    },
    // {
    // 	"id": 8,
    // 	"code": "BP",
    // 	"name": "Buah Mentah Diperam",
    // 	"unit": "Janjang",
    // 	"rules": [
    // 		{
    // 			"operation": "subtraction",
    // 			"limit": {
    // 				"type": "max",
    // 				"value": 0
    // 			},
    // 			"operand": 1,
    // 			"description": "dipotong semua (100%)"
    // 		}
    // 	]
    // },
    {
        "id": 9,
        "code": "PBB",
        "name": "Berondolan Bersih",
        "unit": "kg",
        "rules": [
            {
                "operation": "addition",
                "limit": {
                    "type": "max",
                    "value": 0.1
                },
                "operand": 0.08,
                "description": "kelebihan dari limit.value akan diberikan insentif 8%"
            },
            {
                "operation": "subtraction",
                "limit": {
                    "type": "min",
                    "value": 0.1
                },
                "operand": 0.3,
                "description": "kekurangan dari limit.value akan dikenakan potongan 30%"
            }
        ]
    },
    {
        "id": 10,
        "code": "BK",
        "name": "Berondolan Kotor",
        "unit": "kg",
        "rules": [
            {
                "operation": "subtraction",
                "limit": {
                    "type": "max",
                    "value": 0
                },
                "operand": 1,
                "description": "dipotong semua (100%)"
            }
        ]

    }
];

export default categories;