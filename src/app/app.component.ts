import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'docpost-landingpage';

  texts = [
    {
      title: "Recebimento e Baixa de Boletos",
      description: "Você pode receber o pagamento dos seus boletos diretamente na sua conta bancária pelo app. Você também pode dar baixa manualmente nos boletos que foram pagos por outros meios, como dinheiro ou cheque",
    },
    {
      title: "Notificações e Lembretes",
      description: "Você pode receber notificações e lembretes pelo app sobre os seus boletos, como confirmação de envio, aviso de vencimento, confirmação de pagamento e alerta de inadimplência",
    },
    {
      title: "Integração com o Sistema Web",
      description: "Você pode sincronizar os seus dados entre o app e o sistema online, mantendo as suas informações atualizadas em ambos os dispositivos. Você também pode acessar o seu painel de controle, os seus relatórios e gráficos pela web",
    },
  ]
}
