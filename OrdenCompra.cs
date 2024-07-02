namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class OrdenCompra
{
    public decimal IdOrdenCompra { get; set; }

    public decimal IdCliente { get; set; }

    public decimal IdProveedor { get; set; }

    public decimal IdEntregaEjecucionDetalle { get; set; }

    public DateTime FechaElaboracion { get; set; }

    public string GrupoCompra { get; set; } = null!;

    public string CodigoMoneda { get; set; } = null!;

    public string MetodoPago { get; set; } = null!;

    public string? Observacion { get; set; }

    public decimal ValorTotal { get; set; }

    public decimal CantidadTotal { get; set; }

    public virtual Cliente IdClienteNavigation { get; set; } = null!;

    public virtual EntregaEjecucionDetalle IdEntregaEjecucionDetalleNavigation { get; set; } = null!;

    public virtual Proveedor IdProveedorNavigation { get; set; } = null!;

    public virtual ICollection<OrdenCompraDetalle> OrdenCompraDetalles { get; set; } = new List<OrdenCompraDetalle>();

    public virtual ICollection<Remision> Remisions { get; set; } = new List<Remision>();

}
