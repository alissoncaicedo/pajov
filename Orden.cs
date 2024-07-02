namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class Orden
{
    public decimal IdOrden { get; set; }

    public DateTime FechaElaboracion { get; set; }

    public DateTime FechaEntrega { get; set; }

    public decimal CantidadTotalOrden { get; set; }

    public decimal ValorPago { get; set; }

    public string Observacion { get; set; } = null!;

    public virtual ICollection<OrdenDetalle> OrdenDetalles { get; set; } = new List<OrdenDetalle>();
}
