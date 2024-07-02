namespace CSS.Creaciones.Pajov.Infraestructure.Entities;

public partial class EntregaEjecucionDetalle
{
    public decimal IdEntregaEjecucionDetalle { get; set; }

    public string Direccion { get; set; } = null!;

    public string? Telefono { get; set; }

    public string? Contacto { get; set; }

    public string? Email { get; set; }

    public string Pais { get; set; } = null!;

    public string Departamento { get; set; } = null!;

    public string Ciudad { get; set; } = null!;

    public string Orden { get; set; } = null!;

    public virtual ICollection<OrdenCompra> OrdenCompras { get; set; } = new List<OrdenCompra>();
}
