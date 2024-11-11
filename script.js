document.getElementById('profitForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get values from the form
    const readingYesterdayUnleaded = parseFloat(document.getElementById('readingYesterdayUnleaded').value);
    const readingTodayUnleaded = parseFloat(document.getElementById('readingTodayUnleaded').value);
    const productPriceUnleaded = parseFloat(document.getElementById('productPriceUnleaded').value);
    const supplyPriceUnleaded = parseFloat(document.getElementById('supplyPriceUnleaded').value);
  
    const readingYesterdayPremium = parseFloat(document.getElementById('readingYesterdayPremium').value);
    const readingTodayPremium = parseFloat(document.getElementById('readingTodayPremium').value);
    const productPricePremium = parseFloat(document.getElementById('productPricePremium').value);
    const supplyPricePremium = parseFloat(document.getElementById('supplyPricePremium').value);
  
    const readingYesterdayDiesel = parseFloat(document.getElementById('readingYesterdayDiesel').value);
    const readingTodayDiesel = parseFloat(document.getElementById('readingTodayDiesel').value);
    const productPriceDiesel = parseFloat(document.getElementById('productPriceDiesel').value);
    const supplyPriceDiesel = parseFloat(document.getElementById('supplyPriceDiesel').value);
  
    // Validate that all fields are filled in
    if (isNaN(readingYesterdayUnleaded) || isNaN(readingTodayUnleaded) || isNaN(productPriceUnleaded) || isNaN(supplyPriceUnleaded) ||
        isNaN(readingYesterdayPremium) || isNaN(readingTodayPremium) || isNaN(productPricePremium) || isNaN(supplyPricePremium) ||
        isNaN(readingYesterdayDiesel) || isNaN(readingTodayDiesel) || isNaN(productPriceDiesel) || isNaN(supplyPriceDiesel)) {
      alert("Please fill out all fields correctly.");
      return;
    }
  
    // Unleaded calculations
    const computedSalesUnleaded = (readingTodayUnleaded - readingYesterdayUnleaded) * productPriceUnleaded;
    const computedProfitUnleaded = computedSalesUnleaded - (computedSalesUnleaded * (supplyPriceUnleaded / productPriceUnleaded));
  
    // Premium calculations
    const computedSalesPremium = (readingTodayPremium - readingYesterdayPremium) * productPricePremium;
    const computedProfitPremium = computedSalesPremium - (computedSalesPremium * (supplyPricePremium / productPricePremium));
  
    // Diesel calculations
    const computedSalesDiesel = (readingTodayDiesel - readingYesterdayDiesel) * productPriceDiesel;
    const computedProfitDiesel = computedSalesDiesel - (computedSalesDiesel * (supplyPriceDiesel / productPriceDiesel));
  
    // Calculate total sales and total profit (gain)
    const totalSalesAmount = computedSalesUnleaded + computedSalesPremium + computedSalesDiesel;
    const totalProfitAmount = computedProfitUnleaded + computedProfitPremium + computedProfitDiesel;
  
    // Display results
    document.getElementById('salesUnleaded').textContent = computedSalesUnleaded.toFixed(2);
    document.getElementById('profitUnleaded').textContent = computedProfitUnleaded.toFixed(2);
    document.getElementById('salesPremium').textContent = computedSalesPremium.toFixed(2);
    document.getElementById('profitPremium').textContent = computedProfitPremium.toFixed(2);
    document.getElementById('salesDiesel').textContent = computedSalesDiesel.toFixed(2);
    document.getElementById('profitDiesel').textContent = computedProfitDiesel.toFixed(2);
  
    document.getElementById('totalSales').textContent = totalSalesAmount.toFixed(2);
    document.getElementById('totalProfit').textContent = totalProfitAmount.toFixed(2);
  
    // Show results section
    document.getElementById('results').style.display = 'block';
  });
  