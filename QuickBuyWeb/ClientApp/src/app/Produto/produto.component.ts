import { Component } from "@angular/core"

@Component({
  selector: "produto",
  template: "<html><body>{{ obterNome() }}</body></html>" 
})

//Nome das classes começando com maíusculo por conta da convenção PascalCase
export class ProdutoComponent {

  //camelCase para variáveis, atributos e nomes das funções
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsumg"  ;
  }
}
