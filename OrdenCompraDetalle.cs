namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class OrdenCompraDetalle
{
    public decimal IdOrdenCompraDetalle { get; set; }

    public decimal IdOrdenCompra { get; set; }

    public string Item { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public DateTime FechaEntrega { get; set; }

    public string Direccion { get; set; } = null!;

    public decimal Cantidad { get; set; }

    public string UnidadMedidad { get; set; } = null!;

    public decimal Precio { get; set; }

    public decimal Subtotal { get; set; }

    public virtual OrdenCompra IdOrdenCompraNavigation { get; set; } = null!;
}
