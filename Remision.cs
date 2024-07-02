namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Remision
{
    public decimal IdRemision { get; set; }

    public decimal? IdCliente { get; set; }

    public decimal? IdOrdenCompra { get; set; }

    public DateTime FechaRemision { get; set; }

    public decimal CantidadRemision { get; set; }

    public string CategoriaRemision { get; set; } = null!;

    public virtual Cliente? IdClienteNavigation { get; set; }

    public virtual OrdenCompra? IdOrdenCompraNavigation { get; set; }

    public virtual ICollection<RemisionDetalle> RemisionDetalles { get; set; } = new List<RemisionDetalle>();
}
