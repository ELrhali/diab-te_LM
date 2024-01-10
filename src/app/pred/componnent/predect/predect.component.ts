import { Component } from '@angular/core';
import { PredService } from '../../services/pred.service';

@Component({
  selector: 'app-predect',
  templateUrl: './predect.component.html',
  styleUrls: ['./predect.component.css']
})
export class PredectComponent {
  
  formData: any = {
    age: null,
    hypertension: null,
    heart_disease: null,
    bmi: null,
    HbA1c_level: null,
    blood_glucose_level: null,
    smoking_history_num: '-1'    // Initialize other attributes here
  };
  
  loading: boolean = false;
  prediction: string | null = null;
  showPredictionSection: boolean = false;
  constructor(private predictionService: PredService) {
    this.loading = false; // Initialize loading to false
  }
  predict(data: any): void {
    // Ensure age is greater than 0
    if (data.age <= 0) {
      // Display an error message or handle it as needed
      console.log('Age must be greater than 0');
      return;
    }

    // Set default values of 0 for empty inputs
    for (const key in data) {
      if (data[key] === null || data[key] === undefined || data[key] === '') {
        data[key] = 0;
      }
    }

    this.predictionService.predict(data).subscribe((response) => {
      this.prediction = response.prediction;
      this.loading = true;
    });
  }
  

  /*predict(data: any): void {
    this.predictionService.predict(data).subscribe(
      (response) => {
        this.prediction = response.prediction;
        this.loading = true;
        this.showPredictionSection = true;
      },
      (error) => {
        console.error('Prediction failed:', error);
        this.loading = false;
      }
    );
  }*/
  returnToHome(): void {
    // Toggle the visibility of the prediction and form sections
    this.loading = false;
    
  }
  isDiabetes(): boolean {
    if (this.prediction !== null) {
      return parseInt(this.prediction) === 1;
    }
    return false;
  }
  
}
// 