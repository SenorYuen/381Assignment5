from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = []

products = [
    {
        "id": 1,
        "name": "2023 Mercedes Benz EQS Sedan",
        "description": "The 2023 Mercedes Benz EQS Sedan epitomizes luxury and innovation with its all-electric drivetrain, cutting-edge technology, and opulent interior. It offers exceptional range, advanced driver assistance features, and a sleek design, making it a top choice for those seeking sustainable luxury and state-of-the-art performance.",
        "price": 165000,
        "image": 'images/EQS.jpg'
    },
    {
        "id": 2,
        "name": "2023 Koenigsegg Jesko 24K Edition",
        "description": "The 2023 Koenigsegg Jesko 24K Edition is a masterpiece of engineering and craftsmanship, featuring a limited production run with stunning 24-karat gold accents. Its mind-blowing performance, aerodynamic design, and meticulous attention to detail make it a collector's dream and a symbol of automotive excellence.",
        "price": 4100000,
        "image": 'images/Expensive.jpg'
    },
    {
        "id": 3,
        "name": "1998 Subaru Impreza STi Wagon",
        "description": " The 1998 Subaru Impreza STi Wagon is a legendary rally-inspired car known for its turbocharged power, all-wheel-drive capability, and practical wagon body style. With its iconic blue and gold livery, agile handling, and robust reliability, it's perfect for enthusiasts seeking adventure on and off the road.",
        "price": 48000,
        "image": 'images/Subaru.jpg'
    },
    {
        "id": 4,
        "name": "2007 Nissan Versa Note SV",
        "description": " The 2007 Nissan Versa Note SV offers practicality and affordability with its spacious interior, fuel-efficient engine, and nimble handling. Ideal for urban commuting and daily driving, it boasts a versatile hatchback design, user-friendly features, and excellent value for budget-conscious buyers.",
        "price": 4204,
        "image": 'images/Versa.jpg'
    },
    {
        "id": 5,
        "name": "2022 Lamborghini Countach",
        "description": "The 2022 Lamborghini Countach pays homage to its iconic predecessor while showcasing modern performance and design. With its striking looks, powerful V12 engine, and limited production, it represents the epitome of automotive passion and exclusivity, attracting enthusiasts and collectors worldwide.",
        "price": 2450000,
        "image": 'images/Countach.jpg'
    },
    {
        "id": 6,
        "name": "2023 Acura Integra",
        "description": "The 2023 Acura Integra redefines the compact sports car segment with its dynamic performance, sleek styling, and advanced technology. Offering a perfect balance of agility and refinement, it appeals to driving enthusiasts seeking exhilarating performance and everyday practicality in a stylish package.",
        "price": 47000,
        "image": 'images/Integra.jpg'
    },
    {
        "id": 7,
        "name": "2013 Mazda 2 GS",
        "description": "The 2013 Mazda 2 GS is a fun-to-drive subcompact car known for its responsive handling, fuel efficiency, and compact size. With its sporty demeanor, agile performance, and affordable price, it's an ideal choice for city dwellers and young drivers looking for an enjoyable driving experience.",
        "price": 9990,
        "image": 'images/Mazda2.jpg'
    },
    {
        "id": 8,
        "name": "2012 Honda Civic LX",
        "description": "The 2012 Honda Civic LX is a reliable and fuel-efficient compact sedan renowned for its longevity, comfort, and low ownership costs. Its reputation for durability, spacious interior, and smooth ride make it a top pick for commuters and families seeking practical transportation without sacrificing quality.",
        "price": 10500,
        "image": 'images/Civic.jpg'
    },
    {
        "id": 9,
        "name": "1999 Nissan Skyline",
        "description": "The 1999 Nissan Skyline is an iconic sports car revered for its legendary performance, timeless design, and cult following. With its powerful engine options, advanced technology, and legendary performance heritage, it's a dream car for enthusiasts and collectors seeking Japanese automotive excellence.",
        "price": 115000,
        "image": 'images/skyline.jpg'
    },
    {
        "id": 10,
        "name": "2000 Mazda RX-7",
        "description": "The 2000 Mazda RX-7 is a high-performance sports car celebrated for its rotary engine, agile handling, and sleek design. With its lightweight construction, superb balance, and exhilarating driving dynamics, it offers a thrilling driving experience that's hard to match, making it a sought-after classic among enthusiasts.",
        "price": 45000,
        "image": 'images/rx7.jpg'
    }
    ]

@app.route('/signup', methods=['POST'])
def checkSignup():
    data = request.get_json()
    retrieved_username = data.get('username')
    retrieved_password = data.get('password')
    retrieved_email = data.get('email')

    for user in users:
        print("s")
        if user['username'] == retrieved_username or user['email'] == retrieved_email:
            return jsonify({"UserInDB": True})
    
    users.append(data)
    return jsonify({"UserInDB": False})

@app.route('/login', methods=['POST'])
def checkLogin():
    data = request.get_json()
    retrieved_username = data.get('username')
    retrieved_password = data.get('password')

    for user in users:
        if user['username'] == retrieved_username and user['password'] == retrieved_password:
            return jsonify({"Authenticated": True})
        
    return jsonify({"Authenticated": False})

@app.route('/Products', methods=['GET'])
def retrieveProducts():
    return jsonify(products)

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)    

