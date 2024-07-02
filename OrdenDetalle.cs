namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class OrdenDetalle
{
    public decimal IdOrdenDetalle { get; set; }

    public decimal? IdOrden { get; set; }

    public string DescripcionOrdenDetalle { get; set; } = null!;

    public decimal CantidadOrdenDetalle { get; set; }

    public decimal PrecioUnidad { get; set; }

    public decimal TotalOrdenDetalle { get; set; }

    public virtual Orden? IdOrdenNavigation { get; set; }
}
