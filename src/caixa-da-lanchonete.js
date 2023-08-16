class CaixaDaLanchonete {

	calcularValorDaCompra(metodoDePagamento, itens) {

		let valorDoPedido = 0
		let QTDItens = 0

		let extraUm = false
		let extraDois = false
		let pedidoUm = false
		let pedidoDois = false

		for (let item of itens) {

			let pedido = item.split(',')

			{ (pedido[0] === "chantily") && `${extraUm = true}` }
			{ (pedido[0] === "queijo") && `${extraDois = true}` }

			{ (pedido[0] === "cafe") && `${pedidoUm = true}` }
			{ (pedido[0] === "sanduiche") && `${pedidoDois = true}` }

			{ (pedido[0] === "cafe") && `${valorDoPedido += 3 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "chantily") && `${valorDoPedido += 1.5 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "suco") && `${valorDoPedido += 6.2 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "sanduiche") && `${valorDoPedido += 6.5 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "queijo") && `${valorDoPedido += 2 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "salgado") && `${valorDoPedido += 7.25 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "combo1") && `${valorDoPedido += 9.5 * Number(pedido[1])} ${QTDItens += 1}` }
			{ (pedido[0] === "combo2") && `${valorDoPedido += 7.5 * Number(pedido[1])} ${QTDItens += 1}` }

			if (pedido[0] !== "cafe" && pedido[0] !== "chantily" && pedido[0] !== "suco" && pedido[0] !== "sanduiche" && pedido[0] !== "queijo" && pedido[0] !== "salgado" && pedido[0] !== "combo1" && pedido[0] !== "combo2") {
				return "Item inválido!"
			}

			if (pedido[1] <= 0) {
				return "Quantidade inválida!"
			}
		}

		if (extraUm && !pedidoUm) {
			return "Item extra não pode ser pedido sem o principal"
		}

		if (extraDois && !pedidoDois) {
			return "Item extra não pode ser pedido sem o principal"
		}

		if (metodoDePagamento !== "credito" && metodoDePagamento !== "dinheiro" && metodoDePagamento !== "debito") {
			return "Forma de pagamento inválida!"
		}

		if (QTDItens === 0) {
			return "Não há itens no carrinho de compra!"
		}

		let credito = valorDoPedido * 0.03
		let dinheiro = valorDoPedido * 0.05


		{ (metodoDePagamento === "dinheiro") && `${valorDoPedido -= dinheiro}` }
		{ (metodoDePagamento === "credito") && `${valorDoPedido += credito}` }

		function formatarMoeda(valor) {
			valor = valor.toFixed(2)
			const valorFormatado = valor.toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			});

			return valorFormatado.replace('.', ',');
		}

		return `R$ ${formatarMoeda(valorDoPedido)}`;
	}

}

export { CaixaDaLanchonete };
