export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const { name } = this.drugs[i];

      switch (name) {
        case "Fervex":
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;

            if (this.drugs[i].expiresIn < 11 && this.drugs[i].benefit < 50) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }

            if (this.drugs[i].expiresIn < 6 && this.drugs[i].benefit < 50) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
          }
          break;
        case "Herbal Tea":
          if (this.drugs[i].benefit < 50) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
          break;
        case "Magic Pill":
          break;
        case "Dafalgan":
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;

            if (this.drugs[i].benefit > 0) {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;
            }
          }
          break;
        default:
          if (this.drugs[i].benefit > 0) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
      }

      if (name != "Magic Pill") {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }

      if (this.drugs[i].expiresIn < 0) {
        switch (name) {
          case "Fervex":
            this.drugs[i].benefit = 0;
            break;
          case "Herbal Tea":
            if (this.drugs[i].benefit < 50) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
            break;
          case "Magic Pill":
            break;
          case "Dafalgan":
            if (this.drugs[i].benefit > 0) {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;

              if (this.drugs[i].benefit > 0) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
            break;
          default:
            if (this.drugs[i].benefit > 0) {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;
            }
        }
      }
    }

    return this.drugs;
  }
}
