from flask import Flask, jsonify, render_template, request
import pickle
import numpy as np

# Charger le modèle KNN depuis le fichier
model = pickle.load(open('diabetes_LR.sav', 'rb'))

app = Flask(__name__)

#@app.route('/')
#def man():
    #return render_template('base.html')

@app.route('/predict', methods=['POST'])
def home():
    if request.method == 'POST':
        # Obtenir les données d'entrée depuis la demande JSON
        data = request.get_json()
        
        # Extraire les attributs de la demande JSON
        age = data.get('age')
        hypertension = data.get('hypertension')
        heart_disease = data.get('heart_disease')
        bmi = data.get('bmi')
        HbA1c_level = data.get('HbA1c_level')
        blood_glucose_level = data.get('blood_glucose_level')
        smoking_history_num=data.get('smoking_history_num')

        # Créer un tableau NumPy avec les données d'entrée
        arr = np.array([[age, hypertension, heart_disease, bmi, HbA1c_level, blood_glucose_level,smoking_history_num]])
        
        # Effectuer une prédiction avec le modèle SVM
        pred = model.predict(arr)[0]
        
        # Convertir la prédiction en str (chaîne de caractères)
        pred_str = str(pred)
        
        return jsonify({'prediction': pred_str})

if __name__ == "__main__":
    app.run(debug=True)
