/**
 * Essa parte do código define um componente de botão reutilizável em Angular,
 * com suporte para diferentes estilos, ícones e estados desabilitados, e sedeve ter um icone.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Importe o CommonModule aqui

@Component({
  selector: 'app-cat-button',
  templateUrl: './cat-button.html',
  styleUrls: ['./cat-button.css'],
  imports: [CommonModule], 
  standalone: true // <-- Adicione esta linha para tornar o componente standalone
})

export class CatButtonComponent {
  @Input() buttonText: string = 'Clique Aqui'; //classe de entrada para o texto do botão
  @Input() buttonStyle: 'primary' | 'secondary' = 'primary'; //classe de entrada para o estilo do botão
  @Input() hasCatIcon: boolean = false;   //classe de entrada para exibir o ícone de gato
  @Input() isDisabled: boolean = false;   //classe de entrada para o estado desabilitado do botão

  @Output() buttonClick = new EventEmitter<void>(); //evento de saída para clique no botão

  // Método chamado ao clicar no botão
  onClick(): void {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }

  // Define a classe CSS baseada no estilo do botão
  get buttonClasses(): string {
    return `cat-btn cat-btn-${this.buttonStyle}`;
  }
}

